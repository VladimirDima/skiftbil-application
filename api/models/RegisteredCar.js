const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let RegisteredCar = new Schema({
  plateNumber: {
    type: String,
    unique: true,
  },
  brand: {
    type: String
  },
  type: {
    type: String
  },
});
module.exports = mongoose.model('RegisteredCar', RegisteredCar);