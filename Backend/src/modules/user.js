const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  profille: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_960_720.png",
  },

  blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }],
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

module.exports = mongoose.model("User", userSchema);
