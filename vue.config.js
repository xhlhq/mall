//配置
module.exports = {
    configureWebpack:{
        resolve:{
            //配置别名
            alias:{
                //内部已经配置过 '@':'src'
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'view':'@/view'
            }
        }
    }
}