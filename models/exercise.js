const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: false
  },
  goal: {
    type: Number,
    required: true,
    default: 100
  }
})

module.exports = mongoose.model('Exercise', exerciseSchema)