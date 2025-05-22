// components/BookCard.vue
<template>
  <div class="book-card">
    <div class="book-title">{{ book.title }}</div>
    <div class="book-author">作者：{{ book.author }}</div>
    <div class="book-category">{{ book.category }}</div>
    <div class="book-description">{{ book.description }}</div>
    <div class="book-details">
      <div>出版年份：{{ book.publishYear }}</div>
      <div>ISBN：{{ book.isbn }}</div>
    </div>
    <div class="book-actions">
      <router-link :to="`/edit-book/${book.id}`" class="btn btn-primary">
        編輯
      </router-link>
      <button @click="$emit('delete', book.id)" class="btn btn-danger">
        刪除
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  book: {
    type: Object,
    required: true
  }
})

defineEmits(['delete'])
</script>