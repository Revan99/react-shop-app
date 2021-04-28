const express = require('express');
const dotenv = require('dotenv')
const products = require('./data/products')
const PORT = process.env.PORT || 5000

dotenv.config()

const app = express();

app.get('/', (req, res) => {
    res.send('API is runing...')
})
app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

app.listen(PORT, console.log(`Server is runing in ${process.env.NODE_ENV} on port ${PORT}`))

