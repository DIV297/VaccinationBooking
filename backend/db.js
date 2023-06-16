const mongoose = require('mongoose')
const connectToMongo=()=>{
mongoose.connect("mongodb://localhost:27017/vaccination");
console.log("connected to db");
}
connectToMongo()
module.exports = connectToMongo;
// var personname = mongoose.Schema(
//     {
//         name:String,
//         age:Number,
//         place:String
//     }
// )
// var Person = mongoose.model("collection_name",personname);
// // adding in mongodb;
// var newperson = new Person(
//     {
//         name:"Divansh Bajaj",age:20,place:"Moga"
//     }
// )
// newperson.save();

