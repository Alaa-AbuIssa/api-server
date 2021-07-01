'use strict';

const mongoose = require('mongoose');


const clothSchema = mongoose.Schema({
  name:{type:String},
  price:{type:String},
});

const clothModel = mongoose.model('cloth',clothSchema);

module.exports = clothModel;