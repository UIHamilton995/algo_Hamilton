const express = require('express')
const app = express();
const PORT = 4444
const fs = require('fs')
const DATA_LOCATION = './data.json'
 
 
app.use(express.json())
 
if (!fs.existsSync(DATA_LOCATION)) fs.writeFileSync(DATA_LOCATION, '[]')
   
const readData = () => JSON.parse(fs.readFileSync(DATA_LOCATION, 'utf-8'))
const modifyData = (data) => fs.writeFileSync(DATA_LOCATION, JSON.stringify(data, null, 2))
 
app.get('/', (req, res) => {
    res.send ("welcome to Sarah's app")
})
 

// creating a book
app.post("/books", (req, res) => {
  const books = readData()
  const newBook = {
    id: Date.now(), ...req.body}
    books.push(newBook)
    modifyData(books)
    res.status(201).json(newBook)
  })
  
app.listen(PORT, () => console.log("Your Server is running on PORT 4444"))
