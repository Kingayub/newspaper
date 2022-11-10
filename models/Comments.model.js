const mongoose = require("mongoose")

const CommentsSchema = mongoose.Schema({
    author: String,
    comment: String,
    newsId: String
})


const Comments = mongoose.model('Comment', CommentsSchema)

module.exports = Comments