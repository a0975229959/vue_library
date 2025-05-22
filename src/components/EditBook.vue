// components/EditBook.vue
<template>
  <div class="card">
    <h1>編輯圖書</h1>
    
    <BookForm 
      v-if="bookData"
      :initial-data="bookData"
      @submit="handleSubmit"
      @cancel="handleCancel"
    />
    
    <div v-else>
      <p>找不到該圖書</p>
      <router-link to="/books" class="btn btn-primary">返回列表</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBookStore } from '../composables/useBookStore'
import BookForm from './BookForm.vue'

const route = useRoute()
const router = useRouter()
const bookStore = useBookStore()
const bookData = ref(null)

onMounted(() => {
  const bookId = parseInt(route.params.id)
  const book = bookStore.getBookById(bookId)
  if (book) {
    bookData.value = { ...book }
  }
})

const handleSubmit = (formData) => {
  bookStore.updateBook(bookData.value.id, formData)
  alert('圖書更新成功！')
  router.push('/books')
}

const handleCancel = () => {
  router.push('/books')
}
</script>