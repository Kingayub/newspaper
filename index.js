const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 4000
app.use(express.json())
app.use(require("./routes/news.route"))
app.use(require('./routes/categories.route'))
app.use(require('./routes/comments.route'))
mongoose.connect("mongodb+srv://Ayub:Salavdi1994@cluster0.qdi4tkn.mongodb.net/newspaper?retryWrites=true&w=majority")

app.listen(port, () => {
    console.log(`${port} запущен`)
})