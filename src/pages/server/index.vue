<template>
  <div class="clazz">
	 <router-view></router-view> 
  </div>
</template>

<script>
export default {
  name: 'clazz',
  data () {
    return {
       msg: '服务社会'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .clazz{
    height: 60px;
    font-size: 20px;
    padding: 10px;
  }
  hr{
   color: #ccc;
   font-weight: bold;
  }
</style>

