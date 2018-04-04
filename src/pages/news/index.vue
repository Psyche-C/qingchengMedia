<template>
  <div class="studentCourse">
	 <router-view></router-view> 
  </div>
</template>

<script>

export default {
  name: 'studentCourse',
  data () {
    return {
      msg: '新闻中心'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
