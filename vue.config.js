const path = require('path');
// const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports={
    css: {
        loaderOptions: {
            less: {
                // 属性值包裹在lessOptions内
                lessOptions: {
                    javascriptEnabled: true,
                }
            }
        }
    },
    publicPath: process.env.NODE_ENV === 'production' ? "./" : '/',
    chainWebpack:config => {
        config.resolve.alias.set('@',path.resolve(__dirname,'src'))
            .set("@config",path.resolve(__dirname,'src/config'))
            .set("@page",path.resolve(__dirname,'src/page'))
            .set("@cli",path.resolve(__dirname,'./'))
        //简单描述下现在 根据cli.config 的瓶颈，根据all 和 字符串导入 已经弄好了，但是都是基于动态导入全部然后再去引入对象中的某一个模块实现对的。
        //说白了就是和全部导入没啥区别。这个里需要优化到 正常按需引入一样大小就可以了
        // config.plugin('BundleAnalyzerPlugin')
        //     .use(BundleAnalyzerPlugin)
        // config.plugin('ignore').use(new webpack.IgnorePlugin(
        //     /^\.\/lib$/,
        //     /ant-design-vue$/
        // ))
        // config.plugin('ignore').use(new webpack.IgnorePlugin({
        //     resourceRegExp:
        //         /^\.\/lib\/(button|icon)|\/es\$/,
        //     contextRegExp: /ant-design-vue$/
        // }))
        // config.plugin('IgnorePlugin').use(webpack.IgnorePlugin).tap(
        //     args => {
        //         args[0].ignore=['ant-design-vue/es'];
        //     })
        // config.module
        //     .rule('less')
        //     .test(/\.less$/)
        //     .use('less-loader')
        //     .options({
        //         lessOptions:{
        //             javascriptEnabled: true,
        //         }
        //     })
        //     .loader('less-loader')
        //     .end()
         // config.entry('app').clear().add(process.env.MAIN_URL) //入口文件
    },
}