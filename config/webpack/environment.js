const { environment } = require('@rails/webpacker')

const webpack = require("webpack")
environment.plugins.prepend(
  'provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    "window.jQuery": "jquery"
  })
  )

module.exports = environment
