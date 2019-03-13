const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;
let Car = new Schema({
  registeredCar: {
    type: ObjectId,
    ref: 'RegisteredCar'
  },
  user: {
    type: ObjectId,
    ref: 'User'
  },
  price: {
    type: Number
  },
});
module.exports = mongoose.model('Car', Car);