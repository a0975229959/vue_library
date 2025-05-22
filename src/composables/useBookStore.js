// composables/useBookStore.js
import { ref } from 'vue'

const books = ref([
  {
    id: 1,
    title: '三國演義',
    author: '羅貫中',
    category: '古典文學',
    description: '中國古典四大名著之一，描述三國時期的歷史故事。',
    publishYear: 1400,
    isbn: '9787020002207'
  },
  {
    id: 2,
    title: '哈利波特：神秘的魔法石',
    author: 'J.K.羅琳',
    category: '奇幻小說',
    description: '一個關於魔法世界的精彩冒險故事。',
    publishYear: 1997,
    isbn: '9780747532699'
  },
  {
    id: 3,
    title: '資料結構與演算法',
    author: '張三',
    category: '電腦科學',
    description: '深入淺出地介紹各種資料結構和演算法。',
    publishYear: 2020,
    isbn: '9787111234567'
  }
])

export function useBookStore() {
  const addBook = (book) => {
    const newBook = {
      ...book,
      id: Date.now()
    }
    books.value.push(newBook)
  }

  const updateBook = (id, updatedBook) => {
    const index = books.value.findIndex(book => book.id === id)
    if (index !== -1) {
      books.value[index] = { ...updatedBook, id }
    }
  }

  const deleteBook = (id) => {
    const index = books.value.findIndex(book => book.id === id)
    if (index !== -1) {
      books.value.splice(index, 1)
    }
  }

  const getBookById = (id) => {
    return books.value.find(book => book.id === id)
  }

  return {
    books,
    addBook,
    updateBook,
    deleteBook,
    getBookById
  }
}