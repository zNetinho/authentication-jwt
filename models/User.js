const mongoose = require('mongoose');
// const { Schema } = mongoose;

const UserModel = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model("User", UserModel)
