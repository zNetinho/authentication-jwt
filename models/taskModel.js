const mongoose = require('mongoose');

const taskModel = new mongoose.Schema({
    nameTask: {
        type: String,
        required: true
    },
    descricaoTask: {
        type: String,
        required: true,
    },
    responsavelTask: {
        type: String,
    },
    dataCriacao: {
        type: Date,
        required: true
    },
    dataEntrega: {
        type: Date,
    },
    
});


module.exports = mongoose.model("taskModel", taskModel)
