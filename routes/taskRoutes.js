const router = require('express').Router()
const services = require("./../services/taskServices.js")
const JWTvalidator = require("./../middlewares/validateJWT.js")

const taskController = require("./../controllers/taskController.js");

router
    .route("/")
    .get((req, res) => taskController.get(req, res))

router
    .route("/find")
    .get((req, res) => JWTvalidator(taskController.getId(req, res)))

router
    .route("/create")
    .post((req, res) => JWTvalidator(taskController.create(req, res)))

router
    .route("/add/:id")
    .post((req, res, task) => taskController.addToResponsavel(req, res, task))

router
    .route("/edit/:id")
    .put((req, res) => taskController.editTask(req, res))

router
    .route("/delete")
    .delete((req, res) => taskController.deleteTask(req, res))


module.exports = router;
