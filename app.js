const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()
app.use(express.json());
const main = require('./db/conn.js')

main();

app.listen(3000, ()=> {
    console.log('Servidor ativo')
})

app.get("/", (req, res) => {
    console.log('Servidor ativo')
    return res.status(200).json({ message: `Bem vindo a aplicação com JWT`})
})

const routes = require("./routes/router")
app.use("/api", routes)
