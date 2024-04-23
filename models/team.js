const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeamSchema = new Schema({
    name: String,
    surname: String,
    profession: String,
    specialisation: String,
    images: String
});

module.exports = mongoose.model("Team", TeamSchema);