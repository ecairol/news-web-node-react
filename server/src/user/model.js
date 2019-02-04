const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
  },
  { timestamps: true }
);


mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');