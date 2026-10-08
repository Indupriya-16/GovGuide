const mongoose = require("mongoose");

const opportunitySchema = new mongoose.Schema({
    title: String,
    type: String,
    organization: String,
    qualification: String,
    branch: String,
    minAge: Number,
    maxAge: Number,
    state: String,
    category: String,
    lastDate: Date,
    description: String,
    officialLink: String
});

module.exports = mongoose.model("Opportunity", opportunitySchema);