<template>
  <div class="firstPage">
		 <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'firstPage',
  data () {
    return {
      msg: '首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .student{
    height: 60px;
    font-size: 20px;
    padding: 10px;
  }
  hr{
   color: #ccc;
   font-weight: bold;
  }
</style>
