// main.js
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import BookList from './components/BookList.vue'
import AddBook from './components/AddBook.vue'
import EditBook from './components/EditBook.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/books', name: 'BookList', component: BookList },
  { path: '/add-book', name: 'AddBook', component: AddBook },
  { path: '/edit-book/:id', name: 'EditBook', component: EditBook }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
