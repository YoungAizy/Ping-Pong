const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
        bundle: path.resolve(__dirname, 'public/src/main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Ping Pong Game',
            filename: 'main.html',
            template: 'public/index.html',
        }),
    ],
}