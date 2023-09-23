const express = require('express')
const multer = require('multer')

const UserController = require('./controllers/UserController')
const PatientController = require('./controllers/PatientController')
const DiagnosisController = require('./controllers/DiagnosisController')
const routes = express.Router();


//User
routes.post('/user/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)

//Patient
routes.post('/patient', PatientController.createPatient)
routes.get('/patients', PatientController.getAllPatients)

//Diagnosis
routes.post('/diagnosis', DiagnosisController.createDiagnosis)

module.exports = routes;