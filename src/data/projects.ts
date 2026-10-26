export type ProjectCategory =
  | "Web"
  | "Minecraft"
  | "Security"
  | "Tooling"
  | "Themes";

export interface Project {
  /** Repository name, also used as the stable key. */
  slug: string;
  name: string;
  description: string;
  url: string;
  /** Owner when the project lives on someone else's account. */
  owner?: string;
  language: string;
  category: ProjectCategory;
  tags: string[];
  stars: number;
  featured?: boolean;
  archived?: boolean;
  /** A contribution rather than a repository I own. */
  contribution?: boolean;
}

/**
 * Add a project by appending an entry here. Stars and descriptions can be
 * refreshed with `npm run sync:projects`.
 */
export const projects: Project[] = [
  {
    slug: "tvideoplayer",
    name: "tvideoplayer",
    description:
      "Inspired by NGoedix and QSMP. Made for TortuguitaSMP.",
    url: "https://github.com/LooosaZ/tvideoplayer",
    language: "Java",
    category: "Minecraft",
    tags: ["Minecraft", "Forge", "Video"],
    stars: 5,
    featured: true,
  },
  {
    slug: "tcustomitems",
    name: "tcustomitems",
    description:
      "A Minecraft 1.20.x Forge mod that adds custom items for roleplaying purposes. Made for TortuguitaSMP.",
    url: "https://github.com/LooosaZ/tcustomitems",
    language: "Java",
    category: "Minecraft",
    tags: ["Minecraft", "Forge", "Java"],
    stars: 2,
    featured: true,
  },
  {
    slug: "CryptsaZ",
    name: "CryptsaZ",
    description:
      "Application to encrypt and decrypt files and folders with both symmetric and asymmetric algorithms.",
    url: "https://github.com/LooosaZ/CryptsaZ",
    language: "Python",
    category: "Security",
    tags: ["Cryptography", "Security", "CLI"],
    stars: 0,
    featured: true,
  },
  {
    slug: "Vencord-Reimagined-theme",
    name: "Vencord Reimagined",
    description:
      "A theme that mixes aspects from midnight by refact0r and vencord-theme by nanoqoi.",
    url: "https://github.com/LooosaZ/Vencord-Reimagined-theme",
    language: "CSS",
    category: "Themes",
    tags: ["Vencord", "Discord", "CSS"],
    stars: 2,
    featured: true,
  },
  {
    slug: "Rainbow-Selfbot",
    name: "Rainbow Selfbot",
    description:
      "A Twitch selfbot that gives your username a custom rainbow effect in chat.",
    url: "https://github.com/LooosaZ/Rainbow-Selfbot",
    language: "JavaScript",
    category: "Tooling",
    tags: ["Twitch", "Chat", "Automation"],
    stars: 2,
  },
  {
    slug: "moreSigns",
    name: "moreSigns",
    description: "A Minecraft mod. I contributed to the project alongside duperez.",
    url: "https://github.com/duperez/moreSigns",
    owner: "duperez",
    language: "Java",
    category: "Minecraft",
    tags: ["Minecraft", "Forge", "Contribution"],
    stars: 4,
    contribution: true,
  },
  {
    slug: "hackmud_scripts",
    name: "hackmud_scripts",
    description: "JavaScript scripts we created for Hackmud.",
    url: "https://github.com/LooosaZ/hackmud_scripts",
    language: "JavaScript",
    category: "Tooling",
    tags: ["Hackmud", "Scripts"],
    stars: 1,
  },
  {
    slug: "SitePW-Backend",
    name: "SitePW Backend",
    description: "The backend for a former web project, now archived.",
    url: "https://github.com/LooosaZ/SitePW-Backend",
    language: "JavaScript",
    category: "Web",
    tags: ["Node.js", "API"],
    stars: 1,
    archived: true,
  },
  {
    slug: "SitePW-Frontend",
    name: "SitePW Frontend",
    description: "The frontend for a former web project, now archived.",
    url: "https://github.com/LooosaZ/SitePW-Frontend",
    language: "JavaScript",
    category: "Web",
    tags: ["Web", "Frontend"],
    stars: 0,
    archived: true,
  },
  {
    slug: "loosaz.com",
    name: "loosaz.com",
    description:
      "The site you're looking at: a hand-built, fast and accessible portfolio.",
    url: "https://github.com/LooosaZ/loosaz.com",
    language: "Astro",
    category: "Web",
    tags: ["Astro", "TypeScript", "Portfolio"],
    stars: 0,
  },
];

export const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Web",
  "Minecraft",
  "Security",
  "Tooling",
  "Themes",
];

export const languageColors: Record<string, string> = {
  Astro: "#FF5D01",
  CSS: "#663399",
  Java: "#B07219",
  JavaScript: "#F1E05A",
  Python: "#3572A5",
  TypeScript: "#3178C6",
};

export const featuredProjects = projects.filter((project) => project.featured);
