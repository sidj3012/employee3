const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {type: String, default: "default@gmail.com"},
  position: { type: String, default: "SDE" },
  address: { type: String, required: true },
  salary: {type: Number, default: 1000000},
  mobile: {type: Number, default: 9999999999},
  doj :{ type: Date, default:"10/10/2020"},
  dob: { type: Date, default:"10/10/2000"},


  location: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true },
  },
});

module.exports = mongoose.model('Employee', employeeSchema);
