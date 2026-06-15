import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Samyak Jain",
  EMAIL: "samyak24jain@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Samyak Jain — software engineer building agentic AI and ML systems. Writing, projects, and work.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Notes on AI, machine learning, and building things.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have built.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories where available.",
};

export const PUBLICATIONS: Metadata = {
  TITLE: "Publications",
  DESCRIPTION: "Peer-reviewed papers and patents.",
};

export const SOCIALS: Socials = [
  {
    NAME: "github",
    HREF: "https://github.com/samyak24jain",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/samyak24jain",
  },
  {
    NAME: "google scholar",
    HREF: "https://scholar.google.com/citations?hl=en&user=x7fpLDUAAAAJ",
  },
];
