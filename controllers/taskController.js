const { TaskModel, task } = require("./../models/taskModel.js");
const userModel = require("./../models/User.js");
const services = require("./../services/taskServices.js");
const jwt = require('jsonwebtoken')

const taskController = {

    // Quando criar o front trocar preenchimento das variaveis
    // addToResponsavel: async (req, res, task) => {
    //     const id = req.params.id;
    //     if (!id) {
    //         return res.status(404).json({ message: 'Usuario não encontrado' })
    //     }
    //     try {
    //         const user = await userModel.findById(id);
    //         if (!user) {
    //             return res.status(404).json({ message: 'Usuario não encontrado' })
    //         }
    //         console.log(user)
    //         const taskAdd = {
    //             nameTask: task.nameTask,
    //             descricaoTask: task.descricaoTask,
    //             responsavelTask: task.responsavelTask,
    //             dataCriacao: task.dataCriacao,
    //             dataEntrega: task.dataEntrega,

    //         }
    //         // Adiciona a task ao usuario deixando ela associada ao seu perfil
    //         await userModel.findByIdAndUpdate({_id: id}, { $addToSet: {tasks : taskAdd} })
    //         console.log(taskAdd)
    //         return res.status(200).json(taskAdd)
    //         // await userModel.insert(taskAdd);
    //     } catch (error) {
    //         console.log(error)
    //     }

    // },
    
    create: async (req, res) => {
        // debugger
        const { id } = req.query;
        console.log(id)
        const { nameTask, descricaoTask, responsavelTask, dataCriacao, dataEntrega, status } = req.body

        const task = {
            idUser: id,
            nameTask: nameTask,
            descricaoTask: descricaoTask,
            responsavelTask: responsavelTask,
            dataCriacao: dataCriacao,
            dataEntrega: dataEntrega,
            status: status
        }

        if (!task.nameTask || !task.descricaoTask || !task.dataCriacao) {
            return res.status(422).json({ message: `Por favor preencha os campo(s) corretamente` })
        }

        if (!task) {
            console.log('Erro ao criar objeto task')
            return res.status(500).json({ message: 'Houve um erro, tente novamente' })
        }
        try {
            // if (task.responsavelTask) {
            //     this.addToResponsavel(req, res, task)
            // }
            await TaskModel.create(task)
            // await userModel.findByIdAndUpdate({_id: id}, task)
            return res.status(200).json({ message: 'Sucesso ao criar tarefa' })

        } catch (error) {
            console.log('error capturado no try catch', error)
        }

    },

    editTask: async (req, res) => {
        const id = req.params.id;

        if(!id) {
            return res.status(404).json({ message: `Tarefa não existe`});
        }
        const task = await TaskModel.findById(id);
        if(!task) {
            return res.status(404).json({ message: `Tarefa não localizada no banco`});
        }

        const taskUpdate = {
            nameTask: req.body.nameTask,
            descricaoTask: req.body.descricaoTask,
            responsavelTask: req.body.responsavelTask,
            dataCriacao: req.body.dataCriacao,
            dataEntrega: req.body.dataEntrega,
            status: req.body.status
        }
        if (!taskUpdate.nameTask || !taskUpdate.descricaoTask || !taskUpdate.dataCriacao) {
            return res.status(422).json({ message: `Os campo(s) nome da tarefa, descrição ou data de criação estão vazios corretamente` })
        }

        await TaskModel.findByIdAndUpdate({_id: id}, taskUpdate)
        return res.status(200).json({ message: 'Tarefa editada com sucesso.', taskUpdate })
        
    },

    get: async (req, res) => {

        if (req.method !== 'GET') {
            return res.status(405).json({ message: 'Erro metodo de requisição não permitido' })
        }
        const tasks = await TaskModel.find();
        return res.status(200).json(tasks)
    },

    getId: async (req, res) => {
        const { id }  = req.query;
        console.log(id)
        try {
            if(!id) {
                return res.status(401).json({ message: 'não foi possível validar suas credenciais'})
            }
            const tasks = await TaskModel.find({idUser: id})
            if (!task) {
                return res.status(404).json({ message: 'Tarefa não encontrada' })
            }

            return res.status(200).json(tasks)
        } catch (error) {
            console.log(error)
        }
    },

    deleteTask: async (req, res) => {
        const { id } = req.query

        if(!id) {
            return res.status(404).json({ message: `Tarefa não localizada ${id}`})
        }
        try {
            await TaskModel.findByIdAndDelete(id)
            return res.status(200).json({ message: `Tarefa excluida com sucesso`})
            
        } catch (error) {
            console.log(`Erro ao deletar tarefa ${error}`)
            return res.status(500).json({ message: `Por favor verifique a tarefa`})
        }

    }
 
};

module.exports = taskController;
