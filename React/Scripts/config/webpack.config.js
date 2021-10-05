const path = require("path");

module.exports = {
    devtool: 'inline-source-map' || false,
    entry: {
        index: "./Scripts/src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                use: {
                    loader: "babel-loader"
                },
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: {
                    loader: 'url-loader?limit=10000&prefix=assets/!img'
                }
            }
        ]
    },
    mode: 'development',
}