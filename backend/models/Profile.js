const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: String,
    age: Number,
    qualification: String,
    branch: String,
    percentage: Number,
    state: String,
    category: String
});

module.exports = mongoose.model("Profile", profileSchema);