const mongoose = require('mongoose');

const { Schema } = mongoose;

const task = new Schema({
    idUser: {
        type: String
    },
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
    status: {
        type: String,
        default: "Sem situação"
    },
},
    {
        timestamps: true
    }
);

const TaskModel = mongoose.model("taskModel", task)

module.exports = {
    task,
    TaskModel
}
