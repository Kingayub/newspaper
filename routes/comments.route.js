const { Router } = require("express")
const { commentsController } = require("../controllers/comments.controllers")
const route = Router()

route.get('/comments/:newsId', commentsController.getCommentsById)
route.post('/comments/:newsId', commentsController.addComment)
route.delete('/comments/:id', commentsController.deleteCommentsById)

module.exports = route