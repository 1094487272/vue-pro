module.exports={
    lintOnSave:false,
    devServer:{
        open:true,
        proxy:{
            '/api':{
                target:"http://localhost:1123",
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
                }
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'con': '@/components',
                'views': '@/views',
            }
        }
    }
}