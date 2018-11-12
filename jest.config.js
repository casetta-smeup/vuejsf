module.exports = {
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
    'ts',
    'tsx'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: ["jest-serializer-vue"],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  testURL: "http://localhost/",
  reporters: [
    "default",
    "jest-junit"
  ],
  coverageReporters: [
    "text",
    "cobertura", 
    "html"
  ],
  coverageDirectory: "target/test/unit/coverage",
  //coverageThreshold: {
  //  "global": {
  //    "branches": 100,
  //    "functions": 100,
  //    "lines": 100,
  //    "statements": 100
  //  },
  //},
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.vue"
  ]
};


