<template>
  <div class="course">
	 <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'course',
  data () {
    return {
      msg: '我们需要你'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>