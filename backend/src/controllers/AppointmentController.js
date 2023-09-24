const bcrypt = require('bcrypt')
const Patient = require('../models/Patient')
const Appointment = require('../models/Appointment')

module.exports = {
	async createAppointment(req, res) {
		try {
			const { patient, date, diagnosis, notes, nextAppointment } = req.body

			const apptment = await Appointment.create({
				patient,
				date,
				diagnosis,
                notes,
                nextAppointment
			})
            return res.json(apptment)
	
		} catch (err) {
			throw Error(`Error while creating new user :  ${err}`)
		}
	},
    async getAppointmentByDates(req, res) {
		const { date } = req.params;

		try {
			const apptment = await Appointment.find({date: date});
			return res.json(apptment)
		} catch (error) {
			return res.status(400).json({
				message:
					'Appointment of date does not exist, create apptment with date',
			})
		}
	}
}