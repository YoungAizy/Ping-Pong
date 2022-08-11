const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        bundle: path.resolve(__dirname, 'public/src/main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Ping Pong Game',
            filename: 'index.html',
            template: 'public/index.html',
        }),
    ],
}