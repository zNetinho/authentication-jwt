const userModel = require('./../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config

const servicesTask = {

    checkFormTask: async ({task}) => {
        if(!task.nameTask) {
            return false;
        }
        if(!task.descricaoTarefa) {
            return false;
        }
        if(!task.dataCriacao) {
            return false;
        }
    }

}

module.exports = servicesTask;
