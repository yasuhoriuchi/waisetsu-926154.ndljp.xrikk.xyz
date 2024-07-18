import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: '猥褻と科学',
    customCss: [
      // Tailwindのベーススタイルへのパス
      './src/tailwind.css',
    ],
    components: {
      // デフォルトの`SocialIcons`コンポーネントをオーバーライドします。
      Footer: './src/components/Footer.astro'
    },
    social: {},
    sidebar: [{
      label: "前書き",
      autogenerate: {
        directory: 'foreword'
      }
    }, {
      label: "本文",
      autogenerate: {
        directory: "main"
      }
    }]
  }), tailwind(
    {applyBaseStyles: false,}
  )]
});