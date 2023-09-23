const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
    date: Date,
    diagnosis: String,
    notes: String,
    nextAppointment: Date
})

module.exports = mongoose.model('Appointment', AppointmentSchema)