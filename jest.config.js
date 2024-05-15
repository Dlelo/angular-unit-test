module.exports = {
  // ...other options
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  resolver: 'jest-preset-angular/build/resolvers/ng-jest-resolver.js',
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',
  },
  
  
};