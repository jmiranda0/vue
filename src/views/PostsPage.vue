
<template>
    <header>
        <h2 id="titulo">Welcome to Video Games News</h2>
        <form action="">
            <input type="text" placeholder="Titulo de la noticia" id="busca">
            <button type="submit"><i class="material-icons">search</i> </button>
        </form>
    </header>
    <div class="mayorContainer">
        <div class="container">
                <div class="landing">
                    <img src="../assets/img/Paisaje.jpg" alt="">
                    <div class="landing_text">
                        <h1>Video Games News</h1>
                        <p>texto del landing</p>
                        <button onclick="scrollToDiv()">Empezar</button>
                    </div>
                    
                </div>
                <hr>
                <article>
                    <h1 class="titulo">Historia del Red Dead Redemption</h1>
                    
                    <section v-for="(post) in posts" :key="post.id">
                        <h2>
                            {{post.title}}<br>
                        </h2>
                        <img src= {{post.image}} alt="" width="600">
                        <h2>require(`../assets/{{post.image}}`)</h2>
                        <p class="Textos">
                            {{post.content}}
                        </p>
                        <hr>
                        <h4><i><a href="#">{{post.author.name}}</a></i></h4>
                    </section>
                </article>
        </div>
    </div>

</template>


<script>
    export default {
        data(){
            return{
            posts: [],
           
        }
        },
        methods: {
       
        async loadPosts(){
            try {
                const response = await this.$axios.get('/posts');
                this.posts = response.data;
            } catch (error) {
                console.error('Error al obtener posts:', error);
            }
        },
        
    },
    mounted() {
        this.loadPosts();
    },
    };

</script>
<style>
/*tipos de bordes:
dotted
dashed
solid
double
groove
ridge
inset
outset
none
hidden*/
/*COOLORS.COM*/
/*Normalizer
MdnWebDocument*/
body {
    margin: 0;
    background-color: antiquewhite;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

header{
    display: flex;
    justify-content: space-between;
    background-color: chocolate;
    color: blanchedalmond;
    margin: 0;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
    border-bottom: white;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.3);
}
header a{
    transition: color 0.4s ease;
    color: blanchedalmond;
    text-decoration: none;
    align-self: center;
}
header a:hover {
    color: blueviolet;
}
header h2{
    margin: 0;
    padding: 0;
}
form{
    display: flex;
}
header #busca{
    width: 70%;
    height: 28px;
    border-radius: 5px;
    border-color: chocolate;
    background-color: antiquewhite;
    color: black;
}
header #submit{
    height: 35px;
    width: 35px;
    border-color: chocolate;
    background-color: antiquewhite;
    border-radius: 20px;
    margin: 0;
    color: chocolate;
    align-content: center;
    cursor: pointer;
}
.mayorContainer {
    display: grid;
    grid-template-columns: 3fr;
    }

.container {
    width: 1000px;
    margin-left: 15%;
}
.landing{
    display: flex;
}
.landing_text{
    margin-top: 15%;
}
.landing img{
    height: 75vh;
    width: 40%;
    margin-top: 5%;
    border-radius: 20px;
    margin-right: 5%;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.3);
}
button{
    color: blanchedalmond;
    background-color: chocolate;
    width: 50%;
    height: 15%;
    margin-left: 25%;
    border: 4px solid antiquewhite;
    border-radius: 15px;
    font-size: 20px;
}
article{
    margin-right: 10%;
}
article section {
    transition: box-shadow 0.3s ease;
    background-color: rgb(250, 192, 121);
    margin: 1rem 0;
    border-radius: 0.5rem;
    padding: 0.25rem 0;
    cursor: pointer;
}

article section:hover {
    box-shadow: 0 0.3rem 0.4rem rgba(0, 0, 0, 0.3);
}

article section h2,
article section p {
    margin: 1rem;
}

hr{
    margin-top: 3%;
}
h4{
    margin-top: 2%;
    margin-bottom: 2%;
    margin-left:  15%;
    color: grey;
}
article a{
    text-decoration: none;
    color: grey;
}
article a:hover{
    color: black;
}

footer {
    padding: 3rem;
    color: aliceblue;
    background-color: black;
}

/*div {
 position: absolute;
 bottom: 0;
 left: 0;
 width: 100%;
 height: 100%;
}*/

footer div section {
    float: right;
}

footer div p {
    float: left;
    margin: 0;
}

footer a {
    transition: color 0.4s ease;
    color: blueviolet;
    text-decoration: none;
}

footer a:hover {
    color: blanchedalmond;
}
</style>