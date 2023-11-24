# [Alpha Camp] Dev C3 - M6 指標作業：短網址產生器
此專案為Alpha Camp 後端應用實務 DevC3 M6 之指標作業，透過 NodeJS 和 Express 建立簡易短網址產生器頁面，並利用 Express-handlebars 作為 view engine 展示網頁介面。
在伺服器運作期間，可透過本專案將一般網站簡化成短網址，並且利用fs package實作簡易資料庫系統(JSON)，使用者可以利用產生之短網址，重新導回原本網站。

![home](https://github.com/JerryWang0122/URL_Shortener/blob/main/public/images/home.png?raw=true)
![short](https://github.com/JerryWang0122/URL_Shortener/blob/main/public/images/short.png?raw=true)
![error](https://github.com/JerryWang0122/URL_Shortener/blob/main/public/images/error.png?raw=true)

## Features
* 將輸入的網址轉化成短網址，對於同樣的網站，結尾是否為`/`，並不影響簡化結果，即：`https://github.com/`等價於`https://github.com`
* 將短網址重新導向回原網站
* 點擊Copy按鈕可以複製產生之短網址
* 透過JSON檔儲存原網址和短網址的對應關係
* 當輸入之短網址無法找到對應關係時，導向錯誤頁面

# Quick Start
## Prerequisites
The environment should be equipped with `node.js` & `npm`
## Installing
1. Clone this repository
2. Use terminal and move to URL_Shortener directory
```
cd URL_Shortener
```
3. Install npm packages
```
npm install
```
4. Launch the application
```
npm run start
```
5. The application is working successfully if the following message is shown in the terminal.
```
express server is running on http://localhost:3000
```
## How to use
* Visit http://localhost:3000 to start using the program.
* Use `ctrl + c` in the termial to terminate the application

# Authors
[JerryWang0122](https://github.com/JerryWang0122)

---

# 學習記錄 Whar I Learned
1. 路由 req 能使用的參數有很多，尚有待研究。這次使用的是req.query
2. HTML 表單的 input tag 利用 `required` 確保使用者輸入不為空
3. 嘗試建立utils工具包
4. 使用fs套件，藉由JSON建立簡易資料庫系統
5. 學會如何為複製按鈕建立Copy function
6. 深刻感覺到拆解問題後整體難度的大幅降低，同時利用ChatGPT幫助解決困難