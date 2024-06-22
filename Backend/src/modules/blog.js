const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bloggSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  img: {
    type: String,

    default:
      "https://images.unsplash.com/photo-1610352328296-4443ba82e1f1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  data: {
    type: String,
    required: true,
  },
  // user: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "User",
  // },
  date: {
    type: Date,
    default: Date.now,
  },
  category: {
    type: String,
    default: "Personal Experience",
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Blogg", bloggSchema);
