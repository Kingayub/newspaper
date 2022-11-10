const News = require("../models/News.model")
const Category = require("../models/Category.models")
module.exports.newsController = {
    addNews: (req, res) => {
        News.create(req.body).then((news) => {
            res.json(news)
        })
    },
    getNews: (req, res) => {
        News.find().then((news) => {
            res.json(news)
        })
    },
    deleteNewsById: (req, res) => {
        News.findByIdAndDelete(req.params.id).then((news) => {
            res.json(news)
        })
    },
    patchNewsById: (req, res) => {
        News.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            text: req.body.text,
            category: req.body.category
        }, { new: true }).then((news) => {
            res.json(news)
        })
    },
    getNewsbyId: (req, res) => {
        News.findById(req.params.id).then((news) => {
            res.json(news)
        })
    },
    getNewsByCategory: (req, res) => {
        News.find({ category: req.params.categoryId }).then((news) => {
            res.json(news)
        })
    }
}