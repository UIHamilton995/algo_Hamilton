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
    res.send ("welcome to Hamilton's app")
})
 
// creating a book  
app.post("/createBook", (req, res) => {
  const books = readData()
  const newBook = {
    id: Date.now(), ...req.body}
    books.push(newBook)
    modifyData(books)
    res.status(201).json(newBook)
  })
  
// to GET all the books in './data.json'
app.get('/getBooks', (req, res) => {
  try {
      const books = readData();
      res.json({
          message: `Found ${books.length} books`,
          books: books
      });
    } catch (error) {
      res.status(500).json({ error: 'Could not read books' });
  }
});

// to EDIT a book or update a param e.g quantity - 2
app.put('/getBook/:id', (req, res) => {
  const books = readData();
  const bookId = parseInt(req.params.id);
  
  // Find the book
  const bookIndex = books.findIndex(book => book.id === bookId);
  
  if (bookIndex === -1) {
      return res.status(404).json({ error: 'Book not found' });
  }
  
  // Update the book with new data
  const updatedBook = { ...books[bookIndex], ...req.body };
  books[bookIndex] = updatedBook;
  
  modifyData(books);
  res.json(updatedBook);
});

// to DELETE a particular book
app.delete('/deleteBook/:id', (req, res) => {
  const books = readData();
  const bookId = parseInt(req.params.id);
  
  // Find the book
  const bookIndex = books.findIndex(book => book.id === bookId);
  
  if (bookIndex === -1) {
      return res.status(404).json({ error: 'Book not found' });
  }
  
  // delete the book jare!
  const deletedBook = books.splice(bookIndex, 1)[0];
  
  modifyData(books);
  res.json({ message: 'Book deleted successfully', book: deletedBook });
});

app.listen(PORT, () => console.log("Your Server is running on PORT 4444"))
