const { takeCoverage } = require("v8");

module.exports = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',
  },
  
};