// Whilst the configuration object can be modified here, the recommended way of making
// changes is via the presets' options or Neutrino's API in `.neutrinorc.js` instead.
// Neutrino's inspect feature can be used to view/export the generated configuration.
const neutrino = require('neutrino');
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
let config = neutrino().webpack();

config.output.library = "LIB"
config.output.libraryTarget = 'var'
config.output.umdNamedDefine = false
config.plugins = [ ...config.plugins, new EsmWebpackPlugin() ]

module.exports = config
