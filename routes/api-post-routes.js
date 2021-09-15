const express = require('express');
const {
  getPosts,
  addPost,
  getPost, 
  deletePost,
  editPost,
} = require('../controllers/api-post-controller');

const router = express.Router();

// Получить все посты
router.get('/api/posts', getPosts);
// Добавить новый пост
router.post('/api/post/', addPost);
// Получить пост по его id
router.get('/api/post/:id', getPost);
// Удалить пост по id (временно не доступно)
router.delete('/api/post/:id', deletePost);
// Обновить пост по id (временно не доступно)
router.put('/api/post/:id', editPost);

module.exports = router;
