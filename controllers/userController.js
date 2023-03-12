const User = require("./../models/User.js");
const UserModel = require("./../models/User.js");
const services = require("./../services/userServices.js");
// Para usar um objeto e importante fazer a importação ou require do pacote.
const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')

const userController = {
    create: async (req, res) => {
        try {
            debugger
            const user = {
                nome: req.body.nome,
                email: req.body.email,
                password: req.body.password,
                confirm_password: req.body.confirm_password,
                tasks: []
            }

            if (!user.nome) {
                return res.status(422).json({ message: 'Preencha o nome do formulario' })
            }

            else if (!user.email) {
                return res.status(422).json({ message: 'Preencha o email do formulario' })
            }

            else if (!user.password) {
                return res.status(422).json({ message: 'Preencha o senha do formulario' })
            }

            else if (user.confirm_password !== user.password) {
                return res.status(422).json({ message: 'Confirmação de senha não confere' })
            }

            const emaildb = await (services.checkExistEmail({ user }))
            if (emaildb) {
                return res.status(422).json({ message: 'Email já cadastrado' })

            } else {
                const salt = await bcrypt.genSalt(12)
                const passwordHash = await bcrypt.hash(user.password, salt)
                user.password = passwordHash
                user.confirm_password = passwordHash
                await UserModel.create(user);
                console.log(user)
                return res.status(201).json({ msg: `Usuario registrado` })
            }

        } catch (error) {
            return console.log(error)
        }

    },
    login: async (req, res) => {

        const { email, password } = req.body;
        try {

            if (!email) {
                return res.status(422).json({ message: 'Preencha o email do formulario' })
            }

            if (!password) {
                return res.status(422).json({ message: 'Preencha o senha do formulario' })
            }

            const user = await UserModel.findOne({ email: email })

            if (!user) {
                return res.status(404).json({ message: 'Não foi encontrado o email do formulario' })
            }

            const checkPassword = await bcrypt.compare(password, user.password)

            if (!checkPassword) {
                return res.status(422).json({ message: 'Preencha o senha corretamente' })
            }

            try {
                const secret = process.env.SECRET;
                const token = jwt.sign({
                    // O id do user irá junto com o token
                    id: user._id
                }, secret)
                return res.status(200).json({ Message: `${token}` })
            } catch (error) {
                //Sempre inserir o erro no catch, para que possa entender o que está rolando de errado com a aplicação.
                console.log(error);
                return res.status(500).json({ message: 'Error' })
            }
        } catch (error) {
            console.log(error);
        }

    },
    // Private route
    checkCredentials: async (req, res) => {
        const id = req.params.id;
        const user = await UserModel.findById(id, '-password');
        if (!user) {
            return res.status(404).json({ message: 'Usuario não encontrado' });
        }
        return res.status(200).json({ message: user })
    },

    editUser: async (req, res) => {
        
    }
};


module.exports = userController;
