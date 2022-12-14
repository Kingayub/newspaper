const mongoose = require("mongoose")
const newsSchema = mongoose.Schema({
    title: String,
    text: String,
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category",
    }
})

const News = mongoose.model('news', newsSchema)

module.exports = News