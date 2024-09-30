import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // appディレクトリ以下のすべてのJS/TS/JSX/TSXファイル
    './components/**/*.{js,ts,jsx,tsx}', // componentsディレクトリ以下
    './pages/**/*.{js,ts,jsx,tsx}', // pagesディレクトリがある場合も含める
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
