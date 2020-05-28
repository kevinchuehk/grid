// Whilst the configuration object can be modified here, the recommended way of making
// changes is via the presets' options or Neutrino's API in `.neutrinorc.js` instead.
// Neutrino's inspect feature can be used to view/export the generated configuration.
const neutrino = require('neutrino');
const path = require('path')
let config = neutrino().webpack();

// config.output.library = "LIB"
config.output.path = path.resolve(__dirname, 'dist/umd')

let cjs = {
    ...config,
    output: {
        filename: '[name].js',
        libraryTarget: 'commonjs2',
        path: path.resolve(__dirname, 'dist/cjs')
    }
}

module.exports = [ config, cjs ]
