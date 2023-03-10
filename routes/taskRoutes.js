const router = require('express').Router()
const services = require("./../services/taskServices.js")

const taskController = require("./../controllers/taskController.js");

router
    .route("/")
    .get((req, res) => taskController.get(req, res))

router
    .route("/find/:id")
    .get((req, res) => taskController.getId(req, res))

router
    .route("/create")
    .post((req, res) => taskController.create(req, res))


module.exports = router;
