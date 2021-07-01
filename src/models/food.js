'use strict';

const mongoose = require('mongoose');


const foodSchema = mongoose.Schema({
  name:{type:String},
  price:{type:String},
});

const foodModel = mongoose.model('food',foodSchema);

module.exports = foodModel;