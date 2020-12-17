const path = require('path')
// const webpack = require('webpack')
// const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    devServer: {
        host: 'localhost',
        port: 8078,
        proxy: {
            '/pc': {
                target: 'http://soft3.zjcz.net.cn:8090',
                ws: true,//是否代理websockets
                changeOrigin: true,
                pathRewrite: {
                    '^/pc': '/pc',
                }
            },
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@components', resolve('src/components'))
            .set('@static', resolve('src/static'))
    },
    // configureWebpack: {
    // 	externals: {
    // 		'AMap': 'AMap' // 高德地图配置
    // 	},
    // 	plugins: [
    // 		new webpack.DllReferencePlugin({
    // 			context: process.cwd(),
    // 			manifest: require('./public/vendor/vendor-manifest.json')
    // 		}),
    // 		// 将 dll 注入到 生成的 html 模板中
    // 		new AddAssetHtmlPlugin({
    // 			// dll文件位置
    // 			filepath: path.resolve(__dirname, './public/vendor/*.js'),
    // 			// dll 引用路径
    // 			publicPath: './vendor',
    // 			// dll最终输出的目录
    // 			outputPath: './vendor'
    // 		})
    // 	]
    // },
}