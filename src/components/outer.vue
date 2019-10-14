<template>
  <div>
   outer组件拿到的全局状态：{{getNum3}}<br>
   <button @click="oadd">outer组件改变状态按钮+法操作</button>
   <button @click="oaddAction">outer组件改变状态按钮-法操作(action)</button>
  </div>
</template>

<script>

export default {
  name: 'son',
  methods:{
    oadd:function(){
          this.$store.commit('increase')
      },
    oaddAction(){
      this.$store.dispatch('decreaseActions')
    }
  },
  computed:{
    getNum3:function(){
      return this.$store.state.num
    }
  }
  }

</script>

<style scoped>

</style>