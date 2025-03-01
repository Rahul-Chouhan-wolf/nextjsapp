import type { Config } from 'jest'
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  collectCoverage: true,
  collectCoverageFrom: [
     '**/*.{js,jsx,ts,tsx}',
     '!**/*.d.ts',
     '!**/node_modules/**',
     '!<rootDir>/.next/**',
     '!<rootDir>/out/**',
     '!<rootDir>/public/**',
     '!<rootDir>/coverage/**',
     '!jest.config.js',
     '!jest.setup.js'
  ],
}

export default createJestConfig(config)