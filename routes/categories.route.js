const { Router } = require("express")
const { categoryController } = require("../controllers/categories.controllers")
const route = Router()

route.get('/categories', categoryController.getCategory)
route.post('/categories', categoryController.addCategory)
route.delete('/categories/:id', categoryController.deleteCategory)

module.exports = route