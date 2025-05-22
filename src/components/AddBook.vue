// components/AddBook.vue
<template>
  <div class="card">
    <h1>新增圖書</h1>
    
    <BookForm 
      :initial-data="initialData"
      @submit="handleSubmit"
      @cancel="handleCancel"
    />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useBookStore } from '../composables/useBookStore'
import BookForm from './BookForm.vue'

const router = useRouter()
const bookStore = useBookStore()

const initialData = {
  title: '',
  author: '',
  category: '',
  description: '',
  publishYear: new Date().getFullYear(),
  isbn: ''
}

const handleSubmit = (formData) => {
  bookStore.addBook(formData)
  alert('圖書新增成功！')
  router.push('/books')
}

const handleCancel = () => {
  router.push('/books')
}
</script>