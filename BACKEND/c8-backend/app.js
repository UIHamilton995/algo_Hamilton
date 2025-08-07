const express = require('express')
const fs = require("fs")
const app = express()
const PORT = 8888 
DATA_LOCATION = './data.json'


app.use(express.json())

const readData = () => JSON.parse(fs.readFileSync(DATA_LOCATION))
const modifyData = (data) => fs.writeFileSync(DATA_LOCATION, JSON.stringify(data, null, 2))

app.get('/', (req, res) => {
    res.send('Hey!, let us build Sarah app')
})

app.listen(PORT, () =>
    console.log('Come on! We are on PORT 8888!!!')
)

// creating a book
app.post("/books", (req, res) => {
    const books = readData()
    const newBook = { id: Date.now(), ...req.body}
    books.push(newBook)
    modifyData(books)
    res.status(201).json(newBook)
})
