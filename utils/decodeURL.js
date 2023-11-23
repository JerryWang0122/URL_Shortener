const fs = require("fs")
const filePath = './public/jsons/datas.json'

module.exports = (shortURL) => {
  let jsonData

  // length of shorten URL must be 5
  if (shortURL.length !== 5) return

  // get data from database using synchronous
  try {
    const data = fs.readFileSync(filePath, 'utf8')
    jsonData = data ? JSON.parse(data) : {}
  } catch (err) {
    console.error('Error reading or parsing JSON file:', err)
  }

  // pair shortURL with original website
  // if no pair, return 'undefined' by default
  for (const [key, value] of Object.entries(jsonData)) {
    if (value === shortURL) {
      return key
    }
  }
}
