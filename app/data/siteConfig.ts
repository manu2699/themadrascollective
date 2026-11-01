export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "(00) MANIFESTO", href: "#manifesto" },
  { label: "(01) WHAT WE DO", href: "#what-we-do" },
  { label: "(02) SESSIONS", href: "#sessions" },
  { label: "(03) COLLABORATE", href: "#collaborate" },
  { label: "(04) CONTACT", href: "/contact" },
];

export const FOOTER_NAV_LINKS: NavLink[] = [
  { label: "Manifesto", href: "/#manifesto" },
  { label: "What We Do", href: "/#what-we-do" },
  { label: "Sessions", href: "/#sessions" },
  { label: "Artist Portal", href: "/#collaborate" },
];

export const MARQUEE_ITEMS: string[] = [
  "Intimate Music Shows",
  "Vinyl Listening Sessions",
  "Storytelling",
  "Creative Curation",
];

export const SITE_METADATA = {
  title: "The Madras Collective",
  edition: "Index / 2026 Edition",
  email: "themadrascollective3@gmail.com",
  instagramUrl: "https://www.instagram.com/the_madras_collective_/",
  copyrightNotice: "Madras, India\nEST. 2026 © All Rights Reserved",
};

