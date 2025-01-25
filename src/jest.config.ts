import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest', // Usa o ts-jest para processar TypeScript
  testEnvironment: 'jsdom', // Ambiente de teste para React
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Configuração para arquivos de setup
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transforma arquivos .ts e .tsx
  },

  moduleNameMapper: {
    '^react-router-dom$': '<rootDir>/__mocks__/react-router-dom.js',
    '^swiper/react$': '<rootDir>/__mocks__/swiper/react.js',
    '^swiper/css$': '<rootDir>/__mocks__/swiper/css.js',
    '^swiper/css/navigation$': '<rootDir>/__mocks__/swiper/css/navigation.js',
    '^swiper/css/pagination$': '<rootDir>/__mocks__/swiper/css/pagination.js',
  },
};

export default config;
