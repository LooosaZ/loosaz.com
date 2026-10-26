#!/usr/bin/env node
/**
 * Refresh the star counts in `src/data/projects.ts` from the GitHub API.
 *
 * Usage:
 *   npm run sync:projects
 *   GITHUB_TOKEN=ghp_xxx npm run sync:projects   # avoids the low anonymous rate limit
 *
 * Descriptions, tags and categories are hand-written and never touched — only
 * the `stars` field is rewritten.
 */
import { readFile, writeFile } from "node:fs/promises";

const DATA_FILE = new URL("../src/data/projects.ts", import.meta.url);
const TOKEN = process.env.GITHUB_TOKEN ?? process.env.GH_TOKEN;
const ENTRY = /\n\s+slug: "[^"]+",/g;

const source = await readFile(DATA_FILE, "utf8");
const starts = [...source.matchAll(ENTRY)].map((match) => match.index ?? 0);

if (starts.length === 0) {
  console.error("No projects found in src/data/projects.ts");
  process.exit(1);
}

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "loosaz-portfolio-sync",
  "X-GitHub-Api-Version": "2022-11-28",
  ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
};

const repoFromUrl = (url) => {
  const parsed = new URL(url);
  return parsed.pathname.replace(/^\/|\/$/g, "");
};

const blocks = starts.map((start, index) => {
  const end = index + 1 < starts.length ? starts[index + 1] : source.length;
  return { start, end };
});

let updated = 0;
let failed = 0;

const results = await Promise.allSettled(
  blocks.map(async ({ start, end }) => {
    const block = source.slice(start, end);
    const url = block.match(/url: "(https:\/\/github\.com\/[^"]+)"/)?.[1];
    const slug = block.match(/slug: "([^"]+)"/)?.[1] ?? "unknown";

    if (!url) {
      throw new Error(`${slug}: no GitHub url`);
    }

    const repo = repoFromUrl(url);
    const response = await fetch(`https://api.github.com/repos/${repo}`, { headers });

    if (!response.ok) {
      throw new Error(`${slug}: GitHub responded ${response.status}`);
    }

    const data = await response.json();
    return { start, end, slug, stars: Number(data.stargazers_count ?? 0) };
  }),
);

const changes = [];

for (const result of results) {
  if (result.status === "rejected") {
    failed += 1;
    console.warn(`  skipped  ${result.reason?.message ?? result.reason}`);
    continue;
  }

  const { start, end, slug, stars } = result.value;
  const block = source.slice(start, end);
  const nextBlock = block.replace(/stars: \d+/, `stars: ${stars}`);

  if (nextBlock !== block) {
    changes.push({ start, end, nextBlock });
    updated += 1;
    console.log(`  updated  ${slug} → ${stars}`);
  } else {
    console.log(`  ok       ${slug} (${stars})`);
  }
}

// Apply from the bottom up so earlier offsets stay valid.
let output = source;
for (const { start, end, nextBlock } of changes.sort((a, b) => b.start - a.start)) {
  output = output.slice(0, start) + nextBlock + output.slice(end);
}

if (updated > 0) {
  await writeFile(DATA_FILE, output, "utf8");
}

console.log(`\nDone: ${updated} updated, ${failed} skipped.`);
