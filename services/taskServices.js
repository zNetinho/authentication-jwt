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
    },

    checkIdEmpty: async (id) => {
        const user = await userModel.findById(id);
        if(!user) {
            return false;
        }
        return true;
    }

}

module.exports = servicesTask;
