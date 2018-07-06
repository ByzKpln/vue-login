<template>
  <div id="app">
    <link href='https://fonts.googleapis.com/css?family=Abel' rel='stylesheet'>
    <router-view/>
  </div>
</template>

<script>
import Login from './components/Login.vue'

export default {
  name: 'app',
  components: {
    Login
  }
}
</script>

<style>
body{
  background-color:whitesmoke;
  background-image:url(assets/68746502-paper-wallpapers.jpg);
  font-family: 'Abel';
  }
  
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
