<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Login></Login>
  </div>
</template>

<script>
  import Login from "./components/Login.vue"
export default {
  components: {
      Login
  }
}
</script>

<style>
  @import url("//unpkg.com/element-ui/lib/theme-default/index.css");
  #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
