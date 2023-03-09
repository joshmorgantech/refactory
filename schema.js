const mongoose = require('mongoose');

// Define schema for AO collection
const aoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  ward: {
    type: String,
    required: true
  },
  uniqueId: {
    type: String,
    required: true
  },
  registrationDate: {
    type: Date,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  activities: {
    type: [String],
    required: true
  },
  nin: {
    type: String,
    required: true,
    minlength: 13,
    maxlength: 13
  },
  phoneNumber: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 15
  },
  directions: {
    type: String,
    required: true
  },
  residenceType: {
    type: String,
    enum: ['Rental', 'Owned', 'Other'],
    required: true
  },
  yearsInWard: {
    type: Number,
    required: true,
    min: 10
  },
  authenticationDetails: {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }
});

// Create AO model
const AO = mongoose.model('AO', aoSchema);

module.exports = AO;



const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for FarmerOne collection
const farmerOneSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  ward: {
    type: String,
    required: true
  },
  uniqueId: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female']
  },
  dob: {
    type: Date,
    required: true
  },
  activities: [{
    type: String,
    required: true
  }],
  contacts: [{
    type: String,
    required: true
  }],
  nin: {
    type: String,
    required: true,
    minlength: 13,
    maxlength: 13
  },
  registeredDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  inspectedProduce: [{
    type: Schema.Types.ObjectId,
    ref: 'Produce'
  }]
});

// Create FarmerOne model
const FarmerOne = mongoose.model('FarmerOne', farmerOneSchema);

// Export model for use in other files
module.exports = FarmerOne;
