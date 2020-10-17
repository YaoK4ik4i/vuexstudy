import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state) {
      state.count++
    },
    addN (state, step) {
      state.count += step
    },
    sub (state) {
      state.count--
    },
    subN (state, step) {
      state.count -= step
    }
  },
  actions: {
    // 在 actions 中不能直接修改state中的数据，
    // 必须通过context.commit触发某个 mutations
    addAsync (context) {
      setTimeout (() => { context.commit('add') }, 1000) },
    addNAsync (context, step) {
      setTimeout (() => { context.commit('addN', step) }, 1000) },
    subAsync (context) {
      setTimeout (() => { context.commit('sub') }, 1000) },
  },
  getters: {
    showNum (state) {
      return '当前最新的数量时[' + state.count + ']'
    }
  }
})
