const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Power = new Schema(
  {
    amp: {
      type: String,
      require: true,
    },
    uid: {
      type: String,
      require: true,
    },
    firstTime: {
      type: Date,
      require: true,
    },
    lastTime: {
      type: Date,
      require: true,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = mongoose.model('power', Power);
