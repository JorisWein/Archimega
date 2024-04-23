const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProjectSchema = new Schema({
    images: [String],
    title: String,
    description: String
});

module.exports = mongoose.model("Project", ProjectSchema);