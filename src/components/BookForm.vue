// components/BookForm.vue
<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-group">
      <label>書名</label>
      <input v-model="form.title" type="text" required>
    </div>
    
    <div class="form-group">
      <label>作者</label>
      <input v-model="form.author" type="text" required>
    </div>
    
    <div class="form-group">
      <label>分類</label>
      <select v-model="form.category" required>
        <option value="">請選擇分類</option>
        <option v-for="category in categories" :key="category" :value="category">
          {{ category }}
        </option>
      </select>
    </div>
    
    <div class="form-group">
      <label>描述</label>
      <textarea v-model="form.description" required></textarea>
    </div>
    
    <div class="form-group">
      <label>出版年份</label>
      <input v-model.number="form.publishYear" type="number" min="1000" max="2030" required>
    </div>
    
    <div class="form-group">
      <label>ISBN</label>
      <input v-model="form.isbn" type="text" required>
    </div>
    
    <div class="form-actions">
      <button type="submit" class="btn btn-success">
        {{ isEdit ? '更新圖書' : '新增圖書' }}
      </button>
      <button type="button" @click="$emit('cancel')" class="btn btn-primary">
        返回列表
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  initialData: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['submit', 'cancel'])

const form = ref({ ...props.initialData })

const categories = [
  '古典文學', '現代文學', '奇幻小說', '科幻小說', 
  '電腦科學', '歷史', '傳記', '其他'
]

const isEdit = computed(() => !!props.initialData.id)

// 監聽 initialData 變化
watch(() => props.initialData, (newData) => {
  form.value = { ...newData }
}, { deep: true })

const handleSubmit = () => {
  emit('submit', { ...form.value })
}
</script>