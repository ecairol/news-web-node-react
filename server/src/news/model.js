const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    date: { type: Date, required: true }
  },
  { timestamps: true }
);


mongoose.model('News', NewsSchema);

module.exports = mongoose.model('News');