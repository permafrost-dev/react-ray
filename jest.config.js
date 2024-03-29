const { pathsToModuleNameMapper } = require('ts-jest');
const tsConfigPaths = {
    '@/*': ['src/*'],
    '@tests/*': ['tests/*'],
};

module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
    testEnvironment: 'jsdom',
    transform: { '^.+\\.tsx?$': 'ts-jest' },
    testRegex: '(/__test__/.*|/tests/.*|(\\.|/)(test|spec))\\.[tj]sx?$',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    moduleNameMapper: pathsToModuleNameMapper(tsConfigPaths, { prefix: `${__dirname}/` }),

    coverageDirectory: './coverage',
    coverageReporters: ['html', 'text'],
    collectCoverageFrom: ['src/**/*.{ts,js}', '!**/node_modules/**', '!**/vendor/**', '!**/dist/**', '!**/tests/**'],
};
