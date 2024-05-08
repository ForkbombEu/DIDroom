import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

const vitepressSidebarOptions = {
  documentRootPath: "docs",
  manualSortFileNameByPriority: [
    "intro.md",
    "core-technologies.md",
    "solution.md",
    "get_started.md",
    "guides",
    "sysadmin",
    "setup.md",
    "setup_dashboard.md",
    "deploy_microservices.md",
    "orgadmin",
  ],
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  collapsed: false,
  includeDotFiles: false,
};

export default defineConfig({
  base: "/DIDroom/",
  title: "Didroom ecosystem",
  description: "Empower your Identity strategy: customize, plug, deploy",

  lastUpdated: true,
  metaChunk: true,

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Guide",
        items: [
          { text: "Organization admins", link: "/guides/1_orgadmin/" },
          { text: "Wallet App", link: "/guides/2_wallet/" },
          { text: "Verifier App", link: "/guides/3_verifier/" },
          { text: "System admins", link: "/guides/4_sysadmin/" }
        ],
      },
      { text: "Get started", link: "/get_started" },
    ],
    logo: "images/didroom_logo_emblem.svg",
    sidebar: generateSidebar(vitepressSidebarOptions),
    socialLinks: [
      { icon: "github", link: "https://github.com/forkbombeu/didroom" },
      { icon: "linkedin", link: "https://linkedin.com/company/forkbomb" },
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/forkbombeu/didroom/blob/main/LICENSE">AGPLv3 License</a>.',
      copyright:
        'Copyleft 🄯 2023-present <a href="https://forkbomb.solutions">The Forkbomb Company</a>',
    },
  },
});
