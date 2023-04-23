var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
  userEmailId: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },

  groupsInvolved: {
    type: Array,
    required:true
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});

var User = mongoose.model("User", UserSchema);

module.exports = User;
