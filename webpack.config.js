const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');

module.exports = {
    plugins: [new ESLintPlugin({extensions:['.js','.jsx']})],
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
      },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:'babel-loader'
            }
        ]
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 8080,
    }
};
