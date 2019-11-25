const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let trackerSchema = new Schema({
  jobTitle: {
    type: String
  },
  companyName: {
    type: String
  },
  linkToApp: {
    type: String
  },
  appDeadline: {
    type: Date
  }
}, {
    collection: 'trackers'
  })

module.exports = mongoose.model('Tracker', trackerSchema)