const bcrypt = require('bcrypt')
const dfd = require("danfojs-node")
const path = require('path')

module.exports = {
    async getMedRecs(req, res) {
		try {
			console.log("IN GETMEDRECS")

			const csvFilePath = path.join(__dirname, '../resources/med.csv');

			console.log(csvFilePath)
			const { condition } = req.params; 
			console.log(condition)
			dfd.readCSV(csvFilePath).then(df => {
				console.log(df)
				let df_drop = df.drop({ columns: ["Form", "Indication", "Price", "Type"], axis: 1 })
				let float_df = df_drop.iloc({columns: ["2:"]}).round()
				let string_df = df_drop.iloc({columns: [":2"]}) 
				let df_cleaned = dfd.concat(({ dfList: [string_df, float_df], axis: 1 }))
				
				console.log(df_cleaned)
				console.log("CLEANED DF)")
		
				let df_select = df_cleaned.loc({ rows: df["Condition"].eq(condition) })
				let df_sorted = df_select.sortValues("Effective", { ascending: false })
	
				console.log(df_select)
		
				let json_res = dfd.toJSON(df_sorted.head(10))

				return res.json(json_res)
				
			}).catch((error) => {
				return res.status(400).json({
					message:
						'Cannot get data',
				})
			  });


		} catch (error) {
			return res.status(400).json({
				message:
					'Cannot get data',
			})
		}
	}
}