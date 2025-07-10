const express = require('express')
const app = express()
const PORT = 2025

app.get('/', (req, res) => {
  res.send('Welcome to Zarttalent')
})
app.listen(PORT, () => {
  console.log("Server is on PORT 2025")
})