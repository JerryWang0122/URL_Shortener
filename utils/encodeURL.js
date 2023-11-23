// 字元表：a-z, A-Z, 0-9
const CHAR_TABLE = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
const MAX = CHAR_TABLE.length - 1
const MIN = 0
// digit of short url
const DIGIT = 5

module.exports = (originalURL) => {
  // 儲存回傳的短網址
  let shortURL = ''

  for (let i = 0; i < DIGIT; i++) {
    const randomIndex =  Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
    shortURL += CHAR_TABLE[randomIndex]
  }

  return shortURL
}