import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/DIDroom/",
  title: "Didroom ecosystem",
  description: "Empower your Identity strategy: customize, plug, deploy",

  lastUpdated: true,
  metaChunk: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Reference", link: "/getting-started" },
    ],

    sidebar: [
      {
        text: "🚀 Getting started",
        link: "/getting-started",
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
          { text: "Mobile Zencode", link: "/solution#mobile-zencode" },
          { text: "DiDRoom control room / Dashboard", link: "/solution#didroom-control-room-dashboard", },
          { text: "Didroom microservices", link: "/solution#didroom-microservices" },
          { text: "Wallet holder app", link: "/solution#wallet-holder-app" },
          { text: "Verifier app", link: "/solution#verifier-app" },
          { text: "Didroom web components", link: "/solution#didroom-web-components" },
        ],
      },
      {
        text: "Deployment options",
        items: [
          {
            text: "Software as a Service (SaaS)",
            link: "#software-as-a-service-saas",
          },
          { text: "On-Premise deployment", link: "#on-premise-deployment" },
        ],
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
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/forkbombeu/didroom" },
      { icon: "linkedin", link: "https://linkedin.com/company/forkbomb" },
    ],

    footer: {
      message:
        'Released under the <a href="https://github.com/forkbombeu/didroom/blob/main/LICENSE">AGPLv3 License</a>.',
      copyright:
        'Copyleft 🄯 2023-present <a href="https://forkbomb.eu">Forkbomb BV</a>',
    },
  },
});
