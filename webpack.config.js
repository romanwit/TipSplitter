const path = require("path");

module.exports = {
    mode: "development",
    entry: "./app/app.js", 
    output: {
        path: path.resolve(__dirname, "./public"),     
        publicPath: "/public/",
        filename: "bundle.js"     
    },
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, "/"),
        },
        port: 8081,
        open: true
    },
    module: {
        rules: [   
            {
                test: /\.jsx?$/, 
                exclude: /(node_modules)/,  
                loader: "babel-loader",   
                options: {
                    presets: ["@babel/preset-react"]    
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}