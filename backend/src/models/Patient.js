const mongoose = require('mongoose')
const PatientSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	weight: String,
    age: Number,
    phone: String,
    medication: [String], //same as treatment
    healthState:  [{
        condition: { type: mongoose.Schema.Types.ObjectId, ref: 'Diagnosis' },
        recovered: Boolean
    }] // list of diagnosis + recovered
})

module.exports = mongoose.model('Patient', PatientSchema)