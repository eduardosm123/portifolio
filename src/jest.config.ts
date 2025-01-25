import { Config } from '@jest/types';

const config: Config.InitialOptions = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^unist-util-visit-parents/do-not-use-color$": "<rootDir>/node_modules/unist-util-visit-parents/lib/do-not-use-color"
  }
};

export default config;
