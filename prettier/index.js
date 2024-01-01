/**
 * Explicitly define config options that can be overriden by an .editorconfig
 * Ref: https://github.com/prettier/prettier/blob/main/docs/configuration.md#editorconfig
 *
 * @type {import("prettier").Config}
 */
module.exports = {
  endOfLine: 'lf',
  trailingComma: 'all',
  arrowParens: 'avoid',
  semi: true,
  useTabs: false,
  singleQuote: true,
  tabWidth: 2,
  printWidth: 75,
  plugins: ['prettier-plugin-packagejson', 'prettier-plugin-astro'],
};
