var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientdetailsSchema = new Schema({
  name: String,
  timeLogged: { type: Date, required: true },
  Sugar: Double,
  bp: String
});


var Patientdetails = mongoose.model('Patientdetails', patientdetailsSchema);

module.exports = Patientdetails;
