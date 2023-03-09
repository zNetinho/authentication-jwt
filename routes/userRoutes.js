const router = require('express').Router()
const services = require("./../services/userServices")

const UserController = require("./../controllers/userController")

router
    .route("/auth/register")
    .post((req, res) => UserController.create(req, res))

router
    .route("/auth/login")
    .post((req, res) => UserController.login(req, res))

router
    .route("/auth/login/:id")
    .get(services.checkToken, async(req, res) => UserController.checkCredentials(req, res))


module.exports = router;