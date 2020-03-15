// 定义数据
export const state = () => ({
    catgories: [] // 分类数据
})

// 定义mutauions (修改数据的函数)
export const mutations = {
    init(state,data) {
        state.catgories = data
    }
}