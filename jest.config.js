module.exports = {
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node",
    "css"
  ],
  "roots": [
    "<rootDir>/src/tests"
  ],
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "transform": {
    "^.+\\.(t|j)sx?$": "ts-jest"
  }
}