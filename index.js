module.exports = {
  extends: ["airbnb-base", "plugin:jest/recommended"],
  rules: {
    parserOptions: {
      ecmaVersion: 2017
    },
    "no-param-reassign": ["error", { props: false }],
    "no-use-before-define": ["error", { functions: false, classes: false }],
    "arrow-body-style": 0,
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "linebreak-style": 0,
    "implicit-arrow-linebreak": 0,
    "arrow-parens": 0,
    "comma-dangle": 0,
    "operator-linebreak": 0,
    "object-curly-newline": 0,
    "no-underscore-dangle": 0,
    "function-paren-newline": 0,
    "space-before-function-paren": 0,
    "func-names": 0,
    "no-console": 0,
    radix: ["error", "as-needed"],
    quotes: 0,
    "jsdoc/check-examples": 1,
    "jsdoc/check-param-names": 1,
    "jsdoc/check-tag-names": 1,
    "jsdoc/check-types": 1,
    "jsdoc/newline-after-description": 1,
    "jsdoc/no-undefined-types": 1,
    "jsdoc/require-hyphen-before-param-description": 1,
    "jsdoc/require-param": 1,
    "jsdoc/require-param-name": 1,
    "jsdoc/require-param-type": 1,
    "jsdoc/require-returns": 1,
    "jsdoc/require-returns-check": 1,
    "jsdoc/require-returns-type": 1,
    "jsdoc/valid-types": 1
  },
  overrides: [
    {
      files: ["index.js"],
      rules: {
        "global-require": "off"
      }
    }
  ],
  plugins: ["jest", "jsdoc"]
};
