const Diagnosis=require('../models/Diagnosis')
module.exports = {
	async createDiagnosis(req, res) {
        try {
            // Extract diagnosis data from the request body
            const { name, symptom, mortality, treatment } = req.body;
        
            // Create a new diagnosis document
            const newDiagnosis = new Diagnosis({
              name,
              symptom,
              mortality,
              treatment,
            });
        
            // Save the diagnosis document to the database
            await newDiagnosis.save();
        
            // Respond with a success message or the newly created diagnosis
            res.status(201).json({ message: 'Diagnosis created successfully', diagnosis: newDiagnosis });
          } catch (error) {
            // Handle errors and send an error response
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
          }
  },
  async getDiagnosisById(req,res){
    const diagnosisId = req.params.diagnosisId;

    try {
        const diagnosis = await Diagnosis.findById(diagnosisId);

        if (!diagnosis) {
            return res.status(404).json({ message: 'Diagnosis not found' });
        }

        res.status(200).json(diagnosis);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
  },
}