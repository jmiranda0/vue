<template>
    
    <PostsPage />
    <!-- <PostsForm /> -->
    
</template>

<script>
//import PostComponent from './components/PostComponent.vue';
//import PostsForm from './components/PostsForm.vue';
//import Home from './components/Home.vue';
import PostsPage from './views/PostsPage.vue'
export default {
  name: 'app',
  components: {
    PostsPage
    //PostsForm
    
    
}
}
</script>








<!-- <template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
 -->