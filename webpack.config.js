const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/js/main.js',
        togglerCloseOpen: './src/js/togglerCloseOpen.js',
        preloader: './src/js/preloader.js',
        jsonManager: './src/js/jsonManager.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'imgs',
                            publicPath: 'imgs'
                        }
                    }
                ]
            },
            /* {
                test: /\.(ttf|otf|woff|woff2|eot)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash].[ext]',
                            outputPath: 'fonts',
                            publicPath: 'fonts'
                        }
                    }
                ]
            } */
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/content.html',
            filename: 'html/content.html'
        }),
        new HtmlWebpackPlugin({
            template: './src/html/dictionaries/german-dictonary.html',
            filename: '/html/dictionaries/german-dictonary.html'
        }),
        
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/html/modulen', to: 'html/modulen' },
                { from: 'src/imgs', to: 'imgs' },
            
            ]
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 9002,
        historyApiFallback: true
    }
};
