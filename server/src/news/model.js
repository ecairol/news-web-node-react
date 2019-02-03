const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    image: { type: String },
    date: { type: Date }
  },
  { timestamps: true }
);


mongoose.model('News', NewsSchema);

module.exports = mongoose.model('News');