const bcrypt = require('bcrypt')
const dfd = require("danfojs-node")

module.exports = {
    async getMedRecs(req, res) {
		try {

			const { condition } = req.params;
			dfd.readCSV("../resources/med.csv").then(df => {
				let df_drop = df.drop({ columns: ["Form", "Indication", "Price", "Type"], axis: 1 })
		
				let float_df = df_drop.iloc({columns: ["2:"]}).round()
				let string_df = df_drop.iloc({columns: [":2"]}) 
				let df_cleaned = dfd.concat(({ dfList: [string_df, float_df], axis: 1 }))
				df_cleaned.print()
		
				let df_select = df_cleaned.loc({ rows: df["Condition"].eq(condition) })
				let df_sorted = df_select.sortValues("Effective", { ascending: false, inplace: true })
		
				let json_res = dfd.toJSON(df_sorted.head(10))

				return res.json(dfd.toJSON(df_drop))
				
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