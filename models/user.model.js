const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  first_name: {
    type: String,
    require: false,
    default: null,
  },
  last_name: {
    type: String,
    require: false,
    default: null,
  },
  comments: {
    type: String,
    require: false,
    default: null,
  },
  roles: {
    type: Array,
    require: false,
    default: ["user"],
  },
  active: {
    type: Boolean,
    require: false,
    default: true, // en prod cambiar a false
  },
  email_confirmation: {
    type: Boolean,
    require: false,
    default: false,
  },
  email_confirmation_token: {
    type: String,
    require: false,
    default: null,
  },
  email_confirmation_at: {
    type: Date,
    require: false,
    default: null,
  },
  dob: {
    type: String,
    require: false,
    default: null,
  },
  wallets: {
    type: Array,
    require: false,
    default: [],
  },
  created_at: {
    type: Date,
    require: false,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    require: false,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", UserSchema);