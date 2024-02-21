const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true, // Ensures that each username is unique
        required: true
      },
    password: String
});

const UserModel = mongoose.model('User', UserSchema);


module.exports = UserModel;
