const TaskModel = require("./../models/taskModel.js");
const UserModel = require("./../models/User.js");
const services = require("./../services/taskServices.js");
const jwt = require('jsonwebtoken')

const taskController = {

    create: async (req, res) => {
        // debugger
        const { nameTask, descricaoTask, responsavelTask, dataCriacao, dataEntrega } = req.body

        const task = {
            nameTask: nameTask,
            descricaoTask: descricaoTask,
            responsavelTask: responsavelTask,
            dataCriacao: dataCriacao,
            dataEntrega: dataEntrega
        }

        if(!task.nameTask || !task.descricaoTask || !task.dataCriacao) {
            return res.status(422).json({ message: 'Por favor preencha os campo(s) corretamente' })
        }

        if(!task) {
            console.log('Erro ao criar objeto task')
            return res.status(500).json({ message: 'Houve um erro, tente novamente'})
        }
        try {
            if (task.responsavelTask) {
                await UserModel.findOne({ name: responsavelTask })
            }
            await TaskModel.create(task)
            return res.status(200).json({ message: 'Sucesso ao criar tarefa'})

        } catch (error) {
            console.log('error capturado no try catch', error)
        }

    },

    get: async (req, res) => {
        if(req.method !== 'GET') {
            return res.status (405).json({ message: 'Erro metodo de requisição não permitido'})
        }

        const tasks = await TaskModel.find();
        return res.status(200).json(tasks)
    },

    getId: async (req, res) => {
        const id = req.params.id;

        if(!id) {
            return res.status(404).json({ message: 'Tarefa não encontrada' })
        }

        try {
            const task = await TaskModel.findById(id);
            if(!task) {
                return res.status(404).json({ message: 'Tarefa não encontrada' })
            }
    
            return res.status(200).json(task)
        } catch (error) {
            console.log(error)
        }
    }
};

module.exports = taskController;
