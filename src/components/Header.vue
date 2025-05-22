// components/Header.vue
<template>
  <header>
    <nav>
      <div class="logo">📚 圖書管理系統</div>
      <ul class="nav-links">
        <li><router-link to="/">首頁</router-link></li>
        <li><router-link to="/books">圖書列表</router-link></li>
        <li><router-link to="/add-book">新增圖書</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
// Header 組件邏輯
</script>