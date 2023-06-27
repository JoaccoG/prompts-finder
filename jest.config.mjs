import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './'
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['app/**/*.ts', 'app/**/*.tsx'],
  setupFilesAfterEnv: ['./jest.setup.js']
};

export default createJestConfig(config);
