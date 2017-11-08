const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
id:{type:String,unique:true},
	Firstname: String,
	Lastname: String,
});

module.exports=mongoose.model("NameData",DataSchema);
