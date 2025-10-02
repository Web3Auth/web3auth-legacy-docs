import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  docs: [
    {
      type: "doc",
      id: "README",
    },
    {
      type: "category",
      label: "tKey JS SDK",
      items: [
        "tkey/tkey",
        "tkey/install",
        "tkey/initialize",
        "tkey/usage",
        {
          type: "category",
          label: "Modules",
          collapsible: true,
          collapsed: false,
          items: [
            "tkey/modules/modules",
            "tkey/modules/web-storage",
            "tkey/modules/react-native-storage",
            "tkey/modules/chrome-storage",
            "tkey/modules/security-questions",
            "tkey/modules/share-transfer",
            "tkey/modules/share-serialization",
            "tkey/modules/seed-phrase",
            "tkey/modules/private-keys",
          ],
        },
        {
          type: "category",
          label: "Additional Reading",
          collapsible: true,
          collapsed: false,
          items: ["tkey/implicit-flow"],
        },
        {
          type: "link",
          label: "Release Notes",
          href: "https://github.com/tkey/tkey/releases",
        },
        {
          type: "category",
          label: "Migration Guides",
          items: ["tkey/migration-guides/tkey-v11-to-v15"],
        },
      ],
    },
    {
      type: "category",
      label: "tKey iOS SDK",
      items: [
        "tkey-ios/tkey-ios",
        "tkey-ios/install",
        "tkey-ios/initialize",
        "tkey-ios/usage",
        {
          type: "category",
          label: "Modules",
          items: [
            "tkey-ios/modules/modules",
            "tkey-ios/modules/private-keys",
            "tkey-ios/modules/security-questions",
            "tkey-ios/modules/seed-phrase",
            "tkey-ios/modules/share-serialization",
            "tkey-ios/modules/share-transfer",
          ],
        },
        {
          type: "link",
          label: "Release Notes",
          href: "https://github.com/tkey/tkey-ios/releases",
        },
      ],
    },
    {
      type: "category",
      label: "tKey Android SDK",
      items: [
        "tkey-android/tkey-android",
        "tkey-android/install",
        "tkey-android/initialize",
        "tkey-android/usage",
        {
          type: "category",
          label: "Modules",
          items: [
            "tkey-android/modules/modules",
            "tkey-android/modules/private-keys",
            "tkey-android/modules/security-questions",
            "tkey-android/modules/seed-phrase",
            "tkey-android/modules/share-serialization",
            "tkey-android/modules/share-transfer",
          ],
        },
        {
          type: "link",
          label: "Release Notes",
          href: "https://github.com/tkey/tkey-android/releases",
        },
      ],
    },
    "tkey-ios-mpc",
    {
      type: "category",
      label: "Providers",
      items: [
        "providers/providers",
        "providers/common",
        "providers/evm",
        "providers/solana",
        "providers/xrpl",
      ],
    },
    "tkey-ios-mpc",
    {
      type: "category",
      label: "MPC Core Kit JS",
      items: [
        "mpc-core-kit-js/mpc-core-kit-js",
        "mpc-core-kit-js/install",
        "mpc-core-kit-js/initialize",
        {
          type: "category",
          label: "Authentication",
          items: [
            "mpc-core-kit-js/authentication/authentication",
            "mpc-core-kit-js/authentication/login-jwt",
            "mpc-core-kit-js/authentication/login-oauth",
          ],
        },
        "mpc-core-kit-js/signing",
        "mpc-core-kit-js/usage",
        {
          type: "category",
          label: "Providers",
          items: ["mpc-core-kit-js/providers/providers", "mpc-core-kit-js/providers/evm"],
        },
        {
          type: "link",
          label: "Release Notes",
          href: "https://github.com/Web3Auth/mpc-core-kit/releases",
        },
        {
          type: "category",
          label: "Migration Guides",
          items: ["mpc-core-kit-js/mpc-core-kit-web-v2-to-v3"],
        },
      ],
    },
    {
      type: "category",
      label: "MPC Core Kit React Native",
      items: [
        "mpc-core-kit-react-native/mpc-core-kit-react-native",
        "mpc-core-kit-react-native/install",
        "mpc-core-kit-react-native/initialize",
        "mpc-core-kit-react-native/authentication",
        "mpc-core-kit-react-native/signing",
        "mpc-core-kit-react-native/usage",
        {
          type: "category",
          label: "Providers",
          items: [
            "mpc-core-kit-react-native/providers/providers",
            "mpc-core-kit-react-native/providers/evm",
          ],
        },
        {
          type: "link",
          label: "Release Notes",
          href: "https://github.com/Web3Auth/react-native-mpc-core-kit/releases",
        },
        {
          type: "category",
          label: "Migration Guides",
          items: ["mpc-core-kit-react-native/mpc-core-kit-react-native-migration"],
        },
      ],
    },
  ],
};

export default sidebars;
