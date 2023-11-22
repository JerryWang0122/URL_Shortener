const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('express app for URL shortener')
})

app.get('/shorten', (req, res) => {
  res.send('provide shorten URL')
})

app.get('/shorten/:shortURL', (req, res) => {
  const shortURL = req.params.shortURL
  res.send(`decode shortURL: ${shortURL}, and go to original website`)
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})