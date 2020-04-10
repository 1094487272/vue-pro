module.exports={
    lintOnSave:false,
    devServer:{
        open:true
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