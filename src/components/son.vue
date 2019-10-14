<template>
  <div>
  <span>这是子组件</span>==={{msg}}
  <button @click="sendMsgFa">向父组件传递数据</button><br>
  子组件拿到的全局状态：{{getNum1}}<br>
  <button @click="sadd">子组件改变状态按钮</button>
  <button @click="saddAction">子组件改变状态按钮(action)</button>
  </div>
</template>

<script>

export default {
  name: 'son',
  data:function(){
    return{
      toFaMsg:'这是子组件传给父组件的'
    }
  },
  props:{
    msg:{
      type: String,
      default:''
    }
  },
  methods:{
    sendMsgFa:function(){
      this.$emit('handle',this.toFaMsg)
    },
    sadd(){
      this.$store.commit('increase')
    },
    saddAction(){
      this.$store.dispatch('decreaseActions')
    }
  },
  computed:{
    getNum1:function(){
      //return this.$store.state.num
      return this.$store.getters.getNum
    }
  }
  }

</script>

<style scoped>

</style>