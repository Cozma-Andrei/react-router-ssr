import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  publicDir: 'public',
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  ssr: {
    noExternal: [
      '@rescui/button',
      '@rescui/card',
      '@rescui/checkbox',
      '@rescui/colors',
      "@rescui/focus-manager",
      '@rescui/icons',
      '@rescui/input',
      '@rescui/switcher',
      '@rescui/tab-list',
      '@rescui/tooltip',
      '@rescui/typography',
      '@rescui/ui-contexts',
      '@jetbrains/kotlin-web-site-ui'
    ],
  }
});
