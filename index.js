require('dotenv').config();

const app = require('express')();
const process = require('process');

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`hello world, it is running on http://localhost:${PORT} 🚀`)
})

app.get('/teste', (req, res) => {
    res.status(200).send({
        'smile': '😁',
        'status': 'worked!'
    })
})