const mongoose = require('mongoose')

const AppointmentSchema = new mongoose.Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
    date: Date,
    diagnosis: String,
    notes: String,
    nextAppontiment: Date
})

module.exports = mongoose.model('Appointment', AppointmentSchema)