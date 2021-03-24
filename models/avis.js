const mongoose = require("mongoose");

const avisSchema = new mongoose.Schema({
  étoile: {
    type: Number,
    default:1,
    required: true
  },
  avis: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model("Avis", avisSchema);