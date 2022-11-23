
const express = require('express')
const app = express()
const cors = require('cors');
const connextToDb = require('../src/db/dbConnect')
const router = require('./routers/index')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use(router)

connextToDb()
app.get('/', (req, resp) => {
    resp.send({ message: "default route" })
})

app.listen(5500, () => {
    console.log('listening on port 5500')
})

// app.post()