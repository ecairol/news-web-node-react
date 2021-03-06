const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
  },
  { timestamps: true }
);

UserSchema.pre('save', function (next) {
  var user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }
  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
      if (err) return next(err);
  
      // hash the password along with our new salt
      bcrypt.hash(user.password, salt, function(err, hash) {
          if (err) return next(err);
  
          // override the cleartext password with the hashed one
          user.password = hash;
          next();
      });
  });
});

mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');