// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[tj]s?(x)'],
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.tsx'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'text', 'json-summary', 'lcov'],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
