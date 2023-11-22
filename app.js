const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/shorten', (req, res) => {
  const inputURL = req.query.inputURL // get original URL from route
  res.render('short', { inputURL })
})

app.get('/shorten/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL
  res.send(`decode shortURL: ${shortURL}, and go to original website`)
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})