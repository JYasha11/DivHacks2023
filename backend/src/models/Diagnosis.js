const mongoose = require('mongoose')

const DiagnosisSchema = new mongoose.Schema({
    name: String,
    symptom: [String],
    mortality: Number,
    treatment: [String] // same as mediciation
});

module.exports = mongoose.model('Diagnosis', DiagnosisSchema)