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
              height,
              gender,
              email,
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
              height,
              gender,
              email,
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
    },
    async getPatientById(req,res){
      
      const { patientId } = req.params; // Assuming you pass the patient's ID as a route parameter
    
      try {
        const patient = await Patient.findById(patientId)
          .populate('healthState.condition', 'name') // Populate the 'condition' field with the 'name' property from the 'Diagnosis' model
          .exec();
    
        if (!patient) {
          return res.status(404).json({ message: 'Patient not found' });
        }
    
        res.status(200).json(patient);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
      
    },
    async findByIdAndUpdateEmail(req,res){
      const userId = req.params.patientId;
      const newEmail = req.body.email; // Assuming you send the new email in the request body as { "email": "newemail@example.com" }

      try {
        // Use Mongoose to find the user by ID and update the email field
        const updatedPatient = await Patient.findByIdAndUpdate(
          userId,
          { email: newEmail },
          { new: true } // To return the updated document
        );

        if (!updatedPatient) {
          return res.status(404).json({ message: 'Patient not found' });
        }

        // Respond with the updated patient object
        res.json(updatedPatient);
      } catch (err) {
        console.error(err);
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