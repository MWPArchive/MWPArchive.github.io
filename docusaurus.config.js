// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Piracy",
  tagline: "It's illegal cuz they can't tax you!",
  url: "https://piracy.vercel.app",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "xuac",
  projectName: "piracy",
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/ogimage.png",
      algolia: {
        appId: "WYRH3S2A0X",
        apiKey: "844575fe6602771c605001411bc72fc3",
        indexName: "awesome_piracy",
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Piracy",
        logo: {
          alt: "",
          src: "img/logo.svg",
          srcDark: "img/darklogo.svg",
        },
        items: [
          {
            href: "https://gitlab.com/piracy/piracy",
            label: "GitLab",
            position: "right",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: "star",
        content:
          '<b><a target="_blank" href="https://gitlab.com/piracy/piracy#:~:text=star">PLEASE LEAVE A STAR ON GITLAB</a></b>',
        backgroundColor: "var(--ifm-background-surface-color)",
        textColor: "var(--ifm-color-primary)",
      },
    }),
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: false,
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://gitlab.com/piracy/piracy/-/edit/master/docs/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleAnalytics: {
          trackingID: "UA-131672698-5",
          anonymizeIP: true,
        },
        gtag: {
          trackingID: "UA-131672698-5",
          anonymizeIP: true,
        },
      }),
    ],
  ],
};

module.exports = config;
