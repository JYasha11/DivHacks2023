const dfd = require("danfojs-node")
const med_df = dfd.readCSV("../resources/med.csv");


function getMedData(condition) {
    dfd.readCSV("../resources/med.csv").then(df => {
        // let df_drop = df.drop({ columns: ["Form", "Indication", "Price", "Type"], axis: 1 })

        // let float_df = df_drop.iloc({columns: ["2:"]}).round()
        // let string_df = df_drop.iloc({columns: [":2"]}) 
        // let df_cleaned = dfd.concat(({ dfList: [string_df, float_df], axis: 1 }))
        // df_cleaned.print()

        // let df_select = df_cleaned.loc({ rows: df["Condition"].eq(condition) })
        // let df_sorted = df_select.sortValues("Effective", { ascending: false, inplace: true })

        // console.log(dfd.toJSON(df_sorted.head(10)))
        // return dfd.toJSON(df_sorted.head(10))

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
            df_sorted.print()
    
            let json_res = dfd.toJSON(df_sorted.head(10))

            return json_res
            console.log(json_res)
            console.log("JSON DF)")
    })
}




