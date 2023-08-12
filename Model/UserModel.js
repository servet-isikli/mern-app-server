const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },

  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
    trim: true,
    minlength: 6,
  },
});

const User = mongoose.model("User", UserSchema);
mmodel.export = User;
