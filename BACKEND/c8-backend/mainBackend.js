const express = require('express')
const app = express()
const PORT = 8888 

app.get('/', (req, res) => {
    res.send('Taada!, let us build Sarah app')
})

app.listen(PORT, () =>
    console.log('Come on! We are on!!!')
)