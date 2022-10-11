const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv-safe').config();

const db = require('./database/mongoConfig')
const clientRoutes = require('./routes/clientRoutes')


db.connect() 

app.use(cors())
app.use(express.json())
app.use("/clients", clientRoutes)

module.exports = app