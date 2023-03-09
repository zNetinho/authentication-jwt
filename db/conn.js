const express = require('express')
const mongoose = require('mongoose');
const app = express()
require('dotenv').config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

async function main() {
    mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apiexpress.heyq1gw.mongodb.net/Users?retryWrites=true&w=majority`)
        .then(() => {
            console.log('Conectado ao mongo')
        })
        .catch((error => {
            console.log(error)
        }))

}

module.exports = main;