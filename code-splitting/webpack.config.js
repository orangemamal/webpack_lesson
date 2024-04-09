var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'none', // production, development, none
    entry: './index.js',
    output: {
        filename: '[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader
                },
                "css-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
}