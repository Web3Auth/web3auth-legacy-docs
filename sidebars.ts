import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

import {
  web,
  android,
  ios,
  reactnative,
  flutter,
  unity,
  unreal,
  js,
} from "./src/common/SDKOptions";

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
          label: "Support Forum Web",
          href: "https://web3auth.io/community/c/help-core-kit/core-kit-tkey/8",
        },
        {
          type: "link",
          label: "Support Forum React Native",
          href: "https://web3auth.io/community/c/help-core-kit/tkey-react-native-sdk/29",
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
          label: "Support Forum",
          href: "https://web3auth.io/community/c/help-core-kit/core-kit-tkey-ios/27",
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
          label: "Support Forum",
          href: "https://web3auth.io/community/c/help-core-kit/tkey-android/28",
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
  ],
};

export default sidebars;
