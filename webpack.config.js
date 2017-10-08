var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    context: __dirname,
    entry: ['./src/index.js'],
    output: {
        path: __dirname + "/dist",
        filename: "index.min.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  presets: ['es2015'],
                  plugins: ['transform-class-properties']
                }
              }
        ]
    }    
}