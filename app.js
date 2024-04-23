const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Team = require("./models/team");
const Project = require("./models/projects");
const ejs = require("ejs");
const ejsMate = require("ejs-mate");


app.use(express.static('imgs'));
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect('mongodb://127.0.0.1:27017/Archimega')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    });

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/contacts", (req, res) => {
    res.render("contacts", { currentPage: "contacts" });
});

app.get("/about", async (req, res) => {
    const team = await Team.find({});
    res.render("about", { team, currentPage: "about" });
});

app.get("/projects", async (req, res) => {
    const projects = await Project.find({});
    res.render("projects", { projects, currentPage: "projects" })
});

app.get("/projects/:id", async (req, res) => {
    const { id } = req.params;
    const project = await Project.findById(id);
    res.render("show", { project, currentPage: "projectid" });
});

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!");
});