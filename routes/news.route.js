const { Router } = require('express')
const { newsController } = require('../controllers/news.controllers')
const route = Router()

route.get('/news', newsController.getNews)
route.get('/news/:id', newsController.getNewsbyId)
route.post('/news', newsController.addNews)
route.delete('/news/:id', newsController.deleteNewsById)
route.patch('/news/:id', newsController.patchNewsById)
route.get('/category/:categoryId', newsController.getNewsByCategory)

module.exports = route