'use strict';

class DataCollection {
  constructor(model) {
    this.model = model;
  }

  create(obj) {
    const doc = new this.model(obj);
    return doc.save();
  }

  read(_id) {
    if (_id) {
      return this.model.find({ _id });
    }
    return this.model.find({});
  }

  update(_id, obj) {
    return this.model.findByIdAndUpdate(_id, obj, { new: true });
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = DataCollection;