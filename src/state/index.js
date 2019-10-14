import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//创建状态仓库
export default new Vuex.Store({
    state:{
      num: 99
    },
    mutations:{//定义状态改变函数
      increase(state){//ES6写法
        state.num=state.num+20
      },
      decrease:function(state){
        state.num=state.num-20
      }
    },
    actions:{
       //context 上下文对象
      decreaseActions:function(context){
        //actions中只能对mutation进行操作
        context.commit('decrease')
      }
    },
    getters:{
      getNum(state){
        return state.num > 0 ? state.num : 0
      }
    }
})