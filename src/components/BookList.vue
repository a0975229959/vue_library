// components/BookList.vue
<template>
  <div>
    <div class="card">
      <h1>圖書列表</h1>
      
      <div class="search-bar">
        <input 
          v-model="searchQuery" 
          placeholder="搜尋書名或作者..."
          type="text"
        >
        <select v-model="selectedCategory">
          <option value="">所有分類</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>
    </div>

    <div v-if="filteredBooks.length === 0" class="empty-state">
      <h3>沒有找到相關圖書</h3>
      <p>請嘗試調整搜尋條件或新增一本書</p>
      <router-link to="/add-book" class="btn btn-primary" style="margin-top: 1rem;">
        新增圖書
      </router-link>
    </div>

    <div v-else class="book-grid">
      <BookCard 
        v-for="book in filteredBooks" 
        :key="book.id" 
        :book="book"
        @delete="handleDeleteBook"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useBookStore } from '../composables/useBookStore'
import BookCard from './BookCard.vue'

const bookStore = useBookStore()
const searchQuery = ref('')
const selectedCategory = ref('')

const categories = computed(() => {
  return [...new Set(bookStore.books.value.map(book => book.category))]
})

const filteredBooks = computed(() => {
  let filtered = bookStore.books.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(book => 
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query)
    )
  }

  if (selectedCategory.value) {
    filtered = filtered.filter(book => book.category === selectedCategory.value)
  }

  return filtered
})

const handleDeleteBook = (id) => {
  if (confirm('確定要刪除這本書嗎？')) {
    bookStore.deleteBook(id)
  }
}
</script>