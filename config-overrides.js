const { override, addDecoratorsLegacy, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    configs: path.resolve(__dirname, 'src/configs'),
    apollo: path.resolve(__dirname, 'src/apollo'),
    scenes: path.resolve(__dirname, 'src/scenes'),
    components: path.resolve(__dirname, 'src/components'),
  }),
  addDecoratorsLegacy({
    legacy: true,
  })
);
