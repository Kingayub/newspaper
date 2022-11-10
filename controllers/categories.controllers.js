const Category = require("../models/Category.models")

module.exports.categoryController = {
    getCategory: (req, res) => {
        Category.find().then((cat) => {
            res.json(cat)
        })
    },
    addCategory: (req, res) => {
        Category.create({
            name: req.body.name,
        }).then((cat) => {
            res.json(cat)
        })
    },
    deleteCategory: (req, res) => {
        Category.findByIdAndDelete(req.params.id).then(() => {
            res.json("Category deleted success")
        })
    }
}