import Mock from "mockjs"

Mock.mock("/goods","get",{
    'data|4-8':[{
        'id|+1':1,
        'goods_name':'@ctitle',
        'price':'@float',
        'logo':'@dataImage(150x150)'
    }]
})