const fs = require("fs")

const filePath = './public/jsons/datas.json'

// 字元表：a-z, A-Z, 0-9
const CHAR_TABLE = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const MAX = CHAR_TABLE.length - 1
const MIN = 0
// digit of short url
const DIGIT = 5

module.exports = (originalURL) => {
  // 當網址以"/"結尾時，移除最後字元
  if (originalURL.endsWith("/")) originalURL = originalURL.slice(0, -1)

  // Generate by ChatGPT
  // using synchronous
  try {
    const data = fs.readFileSync(filePath, 'utf8')
    const jsonData = data ? JSON.parse(data) : {}

    if (jsonData[originalURL]){ // 如果已經簡化過，則直接回傳
      return jsonData[originalURL]
    } else {  // 若尚無資料
      // generate shorten URL until there's no repetitive
      let shortenURL = generateShortURL()
      while(Object.values(jsonData).includes(shortenURL)) {
        shortenURL = generateShortURL()
      }
      // update jsonData and write into database
      jsonData[originalURL] = shortenURL
      writeToDatabase(jsonData, filePath)
      return shortenURL
    }
  } catch (err) {
    console.error('Error reading or parsing JSON file:', err)
  }
}

function generateShortURL() {
  // 儲存欲回傳的短網址
  let shortURL = ''

  for (let i = 0; i < DIGIT; i++) {
    const randomIndex =  Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
    shortURL += CHAR_TABLE[randomIndex]
  }

  return shortURL
}

function writeToDatabase(data, path) {
  try {
    fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8')
    console.log('JSON file has been written successfully.')
    
  } catch (err) {
    console.error('Error writing JSON file:', err)
  }
}