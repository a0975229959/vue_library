// components/Home.vue
<template>
  <div>
    <div class="card">
      <h1>歡迎來到圖書管理系統</h1>
      <p>這是一個使用 Vue.js 3 和 Vue Router 建立的簡單圖書管理系統。</p>
      <br>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <router-link to="/books" class="btn btn-primary">瀏覽圖書</router-link>
        <router-link to="/add-book" class="btn btn-success">新增圖書</router-link>
      </div>
    </div>
    
    <div class="card">
      <h2>系統統計</h2>
      <div class="stats-grid">
        <div class="stat-card stat-primary">
          <h3>總書籍數</h3>
          <div class="stat-number">{{ totalBooks }}</div>
        </div>
        <div class="stat-card stat-success">
          <h3>分類數量</h3>
          <div class="stat-number">{{ totalCategories }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useBookStore } from '../composables/useBookStore'

const bookStore = useBookStore()

const totalBooks = computed(() => bookStore.books.value.length)
const totalCategories = computed(() => {
  const categories = new Set(bookStore.books.value.map(book => book.category))
  return categories.size
})
</script>