const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let trackerSchema = new Schema({
  jobTitle: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  linkToApp: {
    type: String,
    required: true
  },
  appDeadline: {
    type: Date,
    required: true
  },
  progress: {
    type:Number,
    required: true
  },
  location: String,
  salary: Number,
  skillsRequired:String,
  additionalNotes:String,
  companyValues:String,
  whatTheyDo:String,
  website:String,
  star: false,

}, {
    collection: 'trackers'
  })

module.exports = mongoose.model('Tracker', trackerSchema)