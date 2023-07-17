const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  imagUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", imageSchema);
