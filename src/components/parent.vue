<template>
  <div>
  <span>这是父组件</span>===={{fromSonMsg}} <br>
  父组件拿到的全局状态：{{getNum2}}<br>
  <button @click="padd">父组件改变状态按钮</button>
  <button @click="paddAction">父组件改变状态按钮(action)</button>
  <hr>
  <son :msg="toSonMsg" @handle="getSonMsg"></son>
  </div>
</template>

<script>
import son from './son'
export default {
  name: 'parent',
  data:function(){
   return{
     toSonMsg:'这是父组件传给子组件的',
     fromSonMsg:''
   } 
  },
  components:{
    son
  },
  methods:{
    getSonMsg:function(value){
      this.fromSonMsg = value
  },
    padd(){//ES6
      this.$store.commit('increase')
    },
    paddAction(){
      this.$store.dispatch('decreaseActions')
    }
  },
  computed:{
    getNum2:function(){
      return this.$store.state.num
    }
  }
  }

</script>

<style scoped>
</style>