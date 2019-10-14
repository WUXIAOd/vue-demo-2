<template>
  <div class="hello">
      <parent/>
      <hr>
      <outer/>
  </div>
</template>

<script>

import parent  from './parent'
import outer from './outer'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    parent,
    outer
  }
}
</script>

<style scoped>

</style>
