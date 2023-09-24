const express = require('express')
const multer = require('multer')

const UserController = require('./controllers/UserController')
const PatientController = require('./controllers/PatientController')
const DiagnosisController = require('./controllers/DiagnosisController')
const AppointmentController = require('./controllers/AppointmentController')
const MedController = require('./controllers/MedController')
const routes = express.Router();


//User
routes.post('/user/register', UserController.createUser)
routes.get('/user/:userId', UserController.getUserById)

//Appointment
routes.post('/appointment/create', AppointmentController.createAppointment)
routes.get('/appointment/date/:date', AppointmentController.getAppointmentByDates)

//Patient
routes.post('/patient', PatientController.createPatient)
routes.get('/patient/:patientId', PatientController.getPatientById)
routes.get('/patients', PatientController.getAllPatients)
routes.get('/patients/condition/:conditionId', PatientController.getPatientsByCondition)
routes.patch('/patient/:patientId/email',PatientController.findByIdAndUpdateEmail)

//Diagnosis
routes.post('/diagnosis', DiagnosisController.createDiagnosis)
routes.get('/diagnosis/:diagnosisId', DiagnosisController.getDiagnosisById)

//MedRec
routes.get('/medications/:condition', MedController.getMedRecs)

module.exports = routes;