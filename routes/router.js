const router = require("express").Router();

const userController = require("./userRoutes");

router.use('/user', userController);

const taskController = require("./taskRoutes")

router.use('/task', taskController)

module.exports = router
