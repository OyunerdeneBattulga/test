const {model , Schema} = require("mongoose")

const DataSchema = new Schema({
    first_name: String,
    last_name: String
});


const DataModel= model("Data" , DataSchema);

module.exports = DataModel;