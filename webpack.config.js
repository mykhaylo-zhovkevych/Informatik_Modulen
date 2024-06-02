const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Set mode to 'development'
    entry: {
        main: './src/js/main.js',
        togglerCloseOpen: './src/js/togglerCloseOpen.js', // Additional entry point
        preloader: './src/js/preloader.js' // Example additional JS file

    },
    output: {
        filename: '[name].bundle.js', // Use [name] to dynamically name the output files
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' // Ensure proper path resolution
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/, // Match CSS files
                use: ['style-loader', 'css-loader'] // Use style-loader and css-loader for CSS files
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html' // Output file name
        }),
        new HtmlWebpackPlugin({
            template: './src/html/content.html',
            filename: 'html/content.html' // Output file name for content.html
        }),

    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 9000,
        historyApiFallback: true // Ensure proper handling of client-side routing
    }
};
