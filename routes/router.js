const router = require("express").Router();

const userController = require("./userRoutes");

router.use('/user', userController);

module.exports = router