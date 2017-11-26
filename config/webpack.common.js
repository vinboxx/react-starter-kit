const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appPath = path.resolve(__dirname, '../');

module.exports = {
    entry: {
        app: path.resolve(appPath, 'src/index.js')
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: appPath
        }),
        new HtmlWebpackPlugin({
            title: 'React App',
            template: path.resolve(appPath, 'src/index.html')
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(appPath, 'dist')
    },
    target: 'web',
    stats: 'normal',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [
                    /node_modules/
                ],
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
