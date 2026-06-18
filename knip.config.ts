import type { KnipConfig } from "knip";

const config: KnipConfig = {
  tags: ["-lintignore"],
  ignoreDependencies: ["@commitlint/cli"],
};

export default config;
