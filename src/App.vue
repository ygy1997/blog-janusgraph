<template>
  <keep-alive>
    <router-view :key="$route.fullPath" name="default"></router-view>
  </keep-alive>
</template>
<script>
export default {
  mounted(){
  }
}
</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
