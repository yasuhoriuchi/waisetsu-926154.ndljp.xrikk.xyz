import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    site: "https://waisetsu-926154.ndljp.xrikk.xyz",
    title: '猥褻と科学',
    head: [
      {tag: 'script',
        content: `
w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TKD33BZ8');
        `}
    ],
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