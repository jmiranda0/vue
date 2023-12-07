<template>
    <div id="app">

      
      <div class="post" v-for="post in posts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <img :src="post.image" alt="post Image">
        <p>{{ post.content }}</p>
        <p>Author: awdawd</p>
      </div>
    </div>
  </template>
  
  <script>    
    export default {
        data() {
        return {
           posts: []
        };
    },
    methods: {
        // Método para cargar los datos de la API
        async fetchData() {
        /* try {
            const response = await this.$axios.get('/posts');
            this.posts = response.data;
        } catch (error) {
            console.error('Error al obtener los posts:', error);
        } */
        }
    },
    mounted() {
        this.fetchData(); // Llama al método fetchData al montar el componente
    }
    };
  </script>
  
  <style>
  .post {
    border: 2px solid #1E90FF;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
    background-color: #f2f2f2;
    color: #333;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .post:hover {
    transform: scale(1.05);
  }
  </style> 