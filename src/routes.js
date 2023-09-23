const express = require('express')
const multer = require('multer')

const UserController = require('./controllers/UserController')
const AppointmentController = require('./controllers/AppointmentController')
const routes = express.Router();


//User
routes.post('/user/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)

routes.post('/appointment/create', AppointmentController.createAppointment)
routes.get('/appointment/date/:date', AppointmentController.getAppointmentByDates)


module.exports = routes;