<template>
  <div class="person">
	 <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'person',
  data () {
    return {
      msg: '社会责任'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>