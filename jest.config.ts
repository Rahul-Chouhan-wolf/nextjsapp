import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}', // Only include files inside the src folder
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!<rootDir>/.next/**',
    '!<rootDir>/out/**',
    '!<rootDir>/public/**',
    '!<rootDir>/coverage/**',
    '!jest.config.js',
    '!jest.setup.js',
    '!<rootDir>/next.config.js', // Ignore Next.js config file
    '!<rootDir>/next-env.d.ts', // Ignore Next.js environment types
  ],
}

export default createJestConfig(config)