import { defineConfig, globalIgnores } from "eslint/config";
import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";

export default defineConfig(
  globalIgnores([".astro/", "dist/", "coverage/**", "storybook-static/**"]),
  js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    },
  },
);
