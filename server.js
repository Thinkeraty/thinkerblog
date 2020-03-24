/*if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

//mongodb+srv://Samyak:7Roqe5auvYIczB2@cluster0-wa6b6.mongodb.net/test?retryWrites=true&w=majority
//7OafTj0w1hFfP42k

const express = require('express')
const Article = require('./models/article')
const articleRouter = require('./routes/articles')
const methodOverride = require('method-override')
const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.get('/', async (req, res) => {
  const articles = await Article.find().sort({ createdAt: 'desc' })
  res.render('articles/index', { articles: articles })
})

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/articles', articleRouter)

const PORT = process.env.PORT || 5000;

app.listen(PORT,  () => console.log(`Server running on port ${PORT}`));*/