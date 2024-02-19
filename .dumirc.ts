import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'ebao-rc',
    nav: [
      {
        title: 'components',
        link: '/components',
      },
    ],
  },
  base: '/ebao-rc/',
  publicPath: '/ebao-rc/',
});
