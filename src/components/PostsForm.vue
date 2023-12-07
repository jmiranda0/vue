<template>
    <div class="noticia">
      <form @submit.prevent="addPost">
        <h3>Introduce a continuación los datos de tu noticia</h3>
        <h4>Escribe el título de tu noticia</h4>
        <input type="text" v-model="title" required>
        <h4>Introduce la image de tu noticia</h4>
        <input type="text" v-model="image" required>
        <h4>Escribe el content de tu noticia</h4>
        <textarea v-model="content" cols="50" rows="20" required></textarea>
        <h4>Introduce tu nomyabre</h4>
        <input type="text" v-model="authors_id" required>
        <h4>Introduce la classification</h4>
        <input type="text" v-model="classifications_id" required>
        <input type="submit" value="Crear" id="boton">
      </form>
    </div>
</template>


<script>
  export default {
   
    methods: {
        async addPost() {
        
        // Crear el objeto con los datos de la noticia
        let post = {
          title: this.title,
          image: this.image,
          content: this.content,
          authors_id: this.authors_id,
          classifications_id: this.classifications_id
        };
        // Realizar una solicitud POST a la API de Laravel para crear la noticia
         await this.$axios.post('/posts', post); // El segundo parámetroes el request
        
    },
      async showPost(){
         try {
      const response = await this.$axios.get(`/posts/`);//{${post.id}}
      this.post = response.data;
    } catch (error) {
      console.error('Error show post: ', error);
    }
      }
  }
    };

</script>