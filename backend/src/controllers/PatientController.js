const bcrypt = require('bcrypt')
const Patient=require('../models/Patient')
const mongoose =require('mongoose')
module.exports = {
	async createPatient(req, res) {
        try {
            // Extract patient data from the request body
            const {
              firstName,
              lastName,
              weight,
              age,
              phone,
              medication,
              healthState,
            } = req.body;
        
            // Create a new patient document
            const newPatient = new Patient({
              firstName,
              lastName,
              weight,
              age,
              phone,
              medication,
              healthState,
            });
        
            // Save the patient document to the database
            await newPatient.save();
        
            // Respond with a success message or the newly created patient
            res.status(201).json({ message: 'Patient created successfully', patient: newPatient });
          } catch (error) {
            // Handle errors and send an error response
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
          }
	},
    async getAllPatients(req,res){
        try {
            // Fetch all patients from the database
            const patients = await Patient.find();
        
            // Respond with the list of patients
            res.status(200).json(patients);
          } catch (error) {
            // Handle errors and send an error response
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
          }
    },
    async getPatientsByCondition(req,res){
        try {
            const { conditionId } = req.params;
        
            // Use the `conditionId` to find patients with the specific condition
            const patients = await Patient.find({
                'healthState': {
                  $elemMatch: {
                    'condition': new mongoose.Types.ObjectId(conditionId)
                  }
                }
              }).exec();
              
        
            // Respond with the list of patients
            res.status(200).json(patients);
          } catch (error) {
            // Handle errors and send an error response
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
          }
    }
    // async getUserById(req, res) {
	// 	const { userId } = req.params;

	// 	try {
	// 		const user = await User.findById(userId);
	// 		return res.json(user)
	// 	} catch (error) {
	// 		return res.status(400).json({
	// 			message:
	// 				'User ID does not exist, do you want to register instead?',
	// 		})
	// 	}
	// }
}