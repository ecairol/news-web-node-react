const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    image: { type: String },
    featured: { type: Boolean }
  },
  { timestamps: true }
);


mongoose.model('News', NewsSchema);

module.exports = mongoose.model('News');