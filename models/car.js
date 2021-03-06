const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = new Schema({
    name: {
        type: String,
        required: "must provide name"
    },
    type: {
      type: String, 
      required: "must provide type"
    },
    owner: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    availability: {
      type: Boolean,
      required: "must provide availability"
    },
    rent: {
      type: Number,
      required: "please add rent"
    },
    description: {
      type: String,
      required: "please add description"
    }
  }
)

const Car = mongoose.model('Car', carSchema);

module.exports = Car;