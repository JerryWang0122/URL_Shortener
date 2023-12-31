const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000

const encodeURL = require("./utils/encodeURL")
const decodeURL = require("./utils/decodeURL")

app.engine('.hbs', engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/shorten', (req, res) => {
  const inputURL = req.query.inputURL // get original URL from route
  const shortURL = encodeURL(inputURL)
  res.render('short', { shortURL })
})

app.get('/shorten/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL
  const originalURL = decodeURL(shortURL)
  if (originalURL) {
    res.redirect(originalURL)
  } else {
    res.render('error', {errURL: `http://localhost:${port}/shorten/${shortURL}`})
  }
  
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})