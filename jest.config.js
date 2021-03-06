module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  testMatch: [
    "<rootDir>/(src/**/*.spec.(ts|tsx|js)|**/__tests__/*.(ts|tsx|js))",
  ],
  collectCoverage: true,
};
