const Comments = require("../models/Comments.model")

module.exports.commentsController = {
    addComment: (req, res) => {
        Comments.create({
            author: req.body.author,
            comment: req.body.comment,
            newsId: req.params.newsId
        }).then((com) => {
            res.json(com)
        })
    },
    getCommentsById: (req, res) => {
        Comments.find({
            newsId: req.params.newsId
        }).then((coms) => {
            res.json(coms)
        })
    },
    deleteCommentsById: (req, res) => {
        Comments.findByIdAndRemove(req.params.id).then(() => {
            res.json("Comment deleted")
        })
    }
}