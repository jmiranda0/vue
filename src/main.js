import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './routes/route.js';

const app = createApp(App).use(router)
 // Configurar la URL base por defecto para las solicitudes
 axios.defaults.baseURL = 'http://localhost:8000/api';
 app.config.globalProperties.$axios = axios;
 

app.mount('#app')