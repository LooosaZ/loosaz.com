export interface SocialLink {
  name: string;
  handle: string;
  href: string;
  icon: "github" | "bluesky" | "x" | "twitch" | "mail";
  external?: boolean;
}

export interface Partner {
  name: string;
  href: string;
  logo: string;
  /** Some logos are wide wordmarks and need more room. */
  wide?: boolean;
}

export interface Broadcast {
  show: string;
  platform: "Twitch" | "YouTube";
  href: string;
}

export interface StackGroup {
  title: string;
  items: { name: string; icon?: string }[];
}

export const site = {
  name: "LoosaZ",
  url: "https://www.loosaz.com",
  email: "contact@loosaz.com",
  role: "Freelance Global Broadcast Manager",
  title: "LoosaZ — Broadcast manager & builder",
  description:
    "LoosaZ is a freelance Global Broadcast Manager for esports and entertainment, a cybersecurity graduate from UTP, and a builder of open-source projects.",
  availability: "Open to freelance work",
  since: 2022,
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const socials: SocialLink[] = [
  {
    name: "GitHub",
    handle: "LooosaZ",
    href: "https://github.com/LooosaZ",
    icon: "github",
    external: true,
  },
  {
    name: "Bluesky",
    handle: "@loosaz.com",
    href: "https://bsky.app/profile/loosaz.com",
    icon: "bluesky",
    external: true,
  },
  {
    name: "X / Twitter",
    handle: "@LooosaZ",
    href: "https://twitter.com/LooosaZ",
    icon: "x",
    external: true,
  },
  {
    name: "Twitch",
    handle: "LoosaZ",
    href: "https://twitch.tv/LoosaZ",
    icon: "twitch",
    external: true,
  },
  {
    name: "Email",
    handle: "contact@loosaz.com",
    href: "mailto:contact@loosaz.com",
    icon: "mail",
  },
];

export const partners: Partner[] = [
  {
    name: "Riot Games",
    href: "https://riot.com",
    logo: "/assets/partners/riot-games.jpg",
  },
  {
    name: "SehLoiro",
    href: "https://sehloiro.com/sl-moderacao/",
    logo: "/assets/partners/sehloiro.jpg",
  },
  {
    name: "Blizzard",
    href: "https://www.blizzard.com/",
    logo: "/assets/partners/blizzard.png",
  },
  {
    name: "Ostra Content",
    href: "https://ostracontent.com/",
    logo: "/assets/partners/ostra-content.jpg",
  },
  {
    name: "Raidiant",
    href: "https://www.raidiant.gg/",
    logo: "/assets/partners/raidiant.jpg",
  },
];

export const broadcasts: Broadcast[] = [
  { show: "Riot Games", platform: "Twitch", href: "https://www.twitch.tv/riotgames" },
  { show: "VALORANT", platform: "Twitch", href: "https://www.twitch.tv/valorant" },
  {
    show: "VALORANT Americas",
    platform: "Twitch",
    href: "https://www.twitch.tv/valorant_americas",
  },
  { show: "Teamfight Tactics", platform: "Twitch", href: "https://www.twitch.tv/teamfighttactics" },
  { show: "2XKO", platform: "Twitch", href: "https://www.twitch.tv/2xko" },
  { show: "Overwatch", platform: "Twitch", href: "https://www.twitch.tv/ow_esports" },
];

export const stack: StackGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "TypeScript", icon: "typescript" },
      { name: "Astro", icon: "astro" },
      { name: "React", icon: "react" },
      { name: "Svelte", icon: "svelte" },
      { name: "SCSS", icon: "sass" },
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Java", icon: "openjdk" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    title: "Native",
    items: [
      { name: "Android", icon: "android" },
      { name: "Kotlin", icon: "kotlin" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "SQLite", icon: "sqlite" },
    ],
  },
  {
    title: "Linux",
    items: [
      { name: "Bash", icon: "gnubash" },
      { name: "Debian", icon: "debian" },
      { name: "Fedora", icon: "fedora" },
    ],
  },
];

