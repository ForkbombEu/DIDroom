import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/DIDroom/",
  title: "Didroom ecosystem",
  description: "Empower your Identity strategy: customize, plug, deploy",

  lastUpdated: true,
  metaChunk: true,

  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Reference", link: "/intro" },
      { text: "Quick start", link: "/quickstart" },
    ],

    sidebar: [
      {
        text: "📖 Introduction ",
        link: "/intro",
        items: [
          { text: "How it works?", link: "/intro#how-it-works", },
          { text: "Features", link: "/intro#features", },
          { text: "Integration and flexibility", link: "/intro#integration-and-flexibility", },
          { text: "Architectural overview", link: "/intro#architectural-overview", },
        ]
      },
      {
        text: "🏗️ Core Technologies",
        link: "/core-technologies",
        items: [
          { text: "Zenroom", link: "/core-technologies#%F0%9F%94%90-zenroom" },
          { text: "Slangroom", link: "/core-technologies#📜-slangroom" },
          { text: "No-code-room", link: "/core-technologies#%F0%9F%9B%A0%EF%B8%8F-no-code-room-ncr" },
          {
            text: "Dyne.org Decentralized Identifiers (DID) Service",
            link: "/core-technologies#%F0%9F%94%97-dyne-org-decentralized-identifiers-did-service",
          },
        ],
      },
      {
        text: "💡 The solution",
        link: "/solution",
        items: [
          { text: "DiDRoom Control Room (Dashboard)", link: "/solution#didroom-control-room-dashboard", },
		  { text: "Didroom Microservices", link: "/solution#didroom-microservices" },
          { text: "Didroom Mobile Libs", link: "/solution#mobile-zencode" },
          { text: "Wallet holder app", link: "/solution#wallet-holder-app" },
          { text: "Verifier app", link: "/solution#verifier-app" },
          { text: "Didroom web components", link: "/solution#didroom-web-components" },
        ],
      },
      {
        text: "🎮 Quickstart",
        link: "/quickstart",
        items: [
          { text: "Software as a Service (SaaS)", link: "/quickstart"},
        ],
      },
      {
        text: "🚀 Deployments",
        items: [
          { text: "On-Premise deployment", link: "/on-premise" },
    		  { text: "Setup an issuance flows", link: "/dashboard/" },
    		  { text: "Deploy your microservices", link: "/microservices/" },
        ]
      },
      {
        text: "Security and compliance",
        items: [
          {
            text: "Overview of security measures",
            link: "#overview-of-security-measures",
          },
          {
            text: "Compliance with Data Protection Regulations",
            link: "#compliance-with-data-protection-regulations",
          },
          {
            text: "Best Practices for secure deployment",
            link: "#best-practices-for-secure-deployment",
          },
        ],
      },
      {
        text: "Integration and customization",
        items: [
          {
            text: "APIs and integration options",
            link: "#apis-and-integration-options",
          },
          {
            text: "Customization capabilities",
            link: "#customization-capabilities",
          },
          {
            text: "Extending Functionality with business login and 3rd party modules",
            link: "#extending-functionality-with-plugins-and-modules",
          },
        ],
      },
      {
        text: "Use Cases and Case Studies",
        items: [
          {
            text: "Industry-specific applications",
            link: "#industry-specific-applications",
          },
          {
            text: "Success stories",
            link: "#success-stories-and-testimonials",
          },
        ],
      },
      {
        text: "Support and resources",
        items: [
          { text: "Documentation", link: "#documentation" },
          { text: "Support channels", link: "#support-channels" },
          {
            text: "Training and educational resources",
            link: "#training-and-educational-resources",
          },
          { text: "Contact Information", link: "#contact-information" },
        ],
      },
      {
        text: "🤟 Aknowledgements",
        link: "/aknowledgements"
      }
    ],

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
