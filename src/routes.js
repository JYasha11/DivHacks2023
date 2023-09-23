const express = require('express')
const multer = require('multer')

const UserController = require('./controllers/UserController')
const routes = express.Router();


//User
routes.post('/user/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)


module.exports = routes;