import { createRouter, createWebHistory } from 'vue-router'
import PostsForm from '../components/PostsForm.vue';
import PostComponent from '../components/PostComponent.vue';
import PostsPage from '../views/PostsPage.vue';

const routes = [
  {
    path: '/PostsForm',
    name: 'PostsForm',
    component: PostsForm
  },
  {
    path: '/PostsPage',
    name: 'PostsPage',
    component: PostsPage
  },
  {
    path: '/PostComponent',
    name: 'PostComponent',
    component: PostComponent
  }
  
] 
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
