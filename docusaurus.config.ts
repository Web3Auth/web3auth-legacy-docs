import dotenv from "dotenv";

import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import fs from "fs";
import { themes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
const sidebarPath = require.resolve("./sidebars");
const customCss = require.resolve("./src/css/custom.css");
// Initialize dotenv
dotenv.config();

const githubOrg = "web3auth";
const githubRepo = "web3auth-docs";
const githubOrgUrl = `https://github.com/${githubOrg}`;
const githubRepoUrl = `${githubOrgUrl}/${githubRepo}`;
const githubEditUrl = `${githubRepoUrl}/edit/master`;
const baseUrl = process.env.REACT_APP_BASE_URL || "/";

const config: Config = {
  title: "Documentation | Web3Auth",
  tagline: "Web3 Auth and Wallet Management (WaaS) SDKs with MPC", // TODO: Confirm with content team
  url: "https://web3auth.io",
  baseUrl,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "warn",
  favicon: "images/favicon.ico",
  organizationName: githubOrg,
  projectName: githubRepo,
  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
        hideable: true,
      },
    },
    announcementBar: {
      id: "sign_up_for_wallets_ux_unconference",
      content:
        '<a href="https://web3auth.io/community/t/web3auth-developer-office-hours/8777" target="_blank">Stuck somewhere in the integration? Join the biweekly Web3Auth Office Hours →</a>',
      isCloseable: true,
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      additionalLanguages: ["groovy", "java", "kotlin", "swift", "dart", "csharp"],
      magicComments: [
        {
          className: "theme-code-block-highlighted-line",
          line: "highlight-next-line",
          block: { start: "highlight-start", end: "highlight-end" },
        },
        {
          className: "code-unfocus",
          line: "unfocus-next-line",
          block: { start: "unfocus-start", end: "unfocus-end" },
        },
        {
          className: "code-focus",
          line: "focus-next-line",
          block: { start: "focus-start", end: "focus-end" },
        },
        {
          className: "git-diff-remove",
          line: "remove-next-line",
          block: { start: "remove-start", end: "remove-end" },
        },
        {
          className: "git-diff-add",
          line: "add-next-line",
          block: { start: "add-start", end: "add-end" },
        },
      ],
    },
    navbar: {
      title: "Documentation",
      logo: {
        alt: "Web3Auth's Logo",
        src: "images/documentation-logo.svg",
        srcDark: "images/documentation-logo-dark.svg",
        target: "_self",
      },
      items: [
        {
          position: "right",
          href: githubOrgUrl,
          className: "navbar-github-link",
          "aria-label": "GitHub Organization",
        },
        {
          type: "search",
          position: "right",
        },
        {
          type: "html",
          position: "right",
          value:
            '<a href="https://dashboard.web3auth.io/" target="_blank" class="navbar-button"><strong class="navbar-button-text">Login to Dashboard</strong></a>',
        },
        {
          type: "html",
          position: "right",
          value: "<div></div>",
        },
      ],
    },
    customFields: {
      baseUrl,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    {
      src: baseUrl + "js/fix-trailing-slash.js",
      async: false,
      defer: false,
    },
    {
      src: "https://polyfill.io/v3/polyfill.min.js?features=MutationObserver",
      async: true,
    },
    {
      src: baseUrl + "js/code-focus.js",
      async: false,
      defer: true,
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "/",
          breadcrumbs: true,
          editUrl: githubEditUrl,
          sidebarPath,
          remarkPlugins: [remarkMath, [npm2yarn, { sync: true }]],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        theme: {
          customCss,
        },
        pages: {
          path: "src/pages",
          routeBasePath: "/",
          include: ["**/**.{js,jsx,ts,tsx,md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          mdxPageComponent: "@theme/MDXPage",
          remarkPlugins: [remarkMath, [npm2yarn, { sync: true }]],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        sitemap: {
          changefreq: "weekly" as any,
          priority: 0.8,
        },
      } satisfies Preset.Options,
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
};

async function createConfig() {
  const prismTheme = themes.vsDark;

  (config.themeConfig.prism as any).theme = {
    ...prismTheme,
    plain: {
      color: "var(--ifm-color-gray-200)",
      backgroundColor: "var(--ifm-color-gray-800)",
    },
    styles: [
      ...prismTheme.styles,
      {
        types: ["prolog"],
        style: {
          color: "#D4D4D4",
        },
      },
      {
        types: ["title"],
        style: {
          color: "#569CD6",
          fontWeight: "bold",
        },
      },
      {
        types: ["property", "parameter"],
        style: {
          color: "#9CDCFE",
        },
      },
      {
        types: ["script"],
        style: {
          color: "#D4D4D4",
        },
      },
      {
        types: ["boolean", "arrow", "atrule", "tag"],
        style: {
          color: "#569CD6",
        },
      },
      {
        types: ["number", "color", "unit"],
        style: {
          color: "#B5CEA8",
        },
      },
      {
        types: ["function"],
        style: {
          color: "#8cc8ff",
        },
      },
      {
        types: ["font-matter"],
        style: {
          color: "#CE9178",
        },
      },
      {
        types: ["keyword", "rule"],
        style: {
          color: "#C586C0",
        },
      },
      {
        types: ["regex"],
        style: {
          color: "#D16969",
        },
      },
      {
        types: ["maybe-class-name"],
        style: {
          color: "#4EC9B0",
        },
      },
      {
        types: ["constant"],
        style: {
          color: "#4FC1FF",
        },
      },
      {
        types: ["comment"],
        style: {
          color: "var(--ifm-color-gray-500)",
        },
      },
    ],
  };
  (config.themeConfig.prism as any).darkTheme = {
    ...prismTheme,
    plain: {
      color: "var(--ifm-color-gray-200)",
      backgroundColor: "#000",
    },
    styles: [
      ...prismTheme.styles,
      {
        types: ["prolog"],
        style: {
          color: "#D4D4D4",
        },
      },
      {
        types: ["title"],
        style: {
          color: "#569CD6",
          fontWeight: "bold",
        },
      },
      {
        types: ["property", "parameter"],
        style: {
          color: "#9CDCFE",
        },
      },
      {
        types: ["script"],
        style: {
          color: "#D4D4D4",
        },
      },
      {
        types: ["boolean", "arrow", "atrule", "tag"],
        style: {
          color: "#569CD6",
        },
      },
      {
        types: ["number", "color", "unit"],
        style: {
          color: "#B5CEA8",
        },
      },
      {
        types: ["function"],
        style: {
          color: "#8cc8ff",
        },
      },
      {
        types: ["font-matter"],
        style: {
          color: "#CE9178",
        },
      },
      {
        types: ["keyword", "rule"],
        style: {
          color: "#C586C0",
        },
      },
      {
        types: ["regex"],
        style: {
          color: "#D16969",
        },
      },
      {
        types: ["maybe-class-name"],
        style: {
          color: "#4EC9B0",
        },
      },
      {
        types: ["constant"],
        style: {
          color: "#4FC1FF",
        },
      },
      {
        types: ["comment"],
        style: {
          color: "var(--ifm-color-gray-500)",
        },
      },
    ],
  };

  return config;
}

module.exports = createConfig;
