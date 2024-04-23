const mongoose = require("mongoose");
const Team = require("../models/team");
const Project = require("../models/projects");

mongoose.connect('mongodb://127.0.0.1:27017/Archimega')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    });

const newTeam = async () => {
    const team = new Team({
        name: "Peter",
        surname: "Dnomson",
        profession: "Material Engineer",
        specialisation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laudantium asperiores sit rem incidunt id quas soluta a sed error!",
        images: "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1923&q=80"
    });

    const team1 = new Team({
        name: "Sarah",
        surname: "Leonwa",
        profession: "Architectural Historian",
        specialisation: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde laudantium asperiores sit rem incidunt id quas soluta a sed error!",
        images: "https://images.unsplash.com/photo-1524255684952-d7185b509571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    });

    await team.save();
    await team1.save();
};

newTeam().then(() => {
    mongoose.connection.close();
});

const newProject = async () => {
    const project = new Project({
        images: [
            "https://images.unsplash.com/photo-1606074280798-2dabb75ce10c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
            "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
        ],
        title: "Dutch Interior",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, distinctio. Possimus modi facere libero assumenda."
    });
    await project.save()
};

const deleteProject = async () => {
    await Project.deleteMany({});
};


newProject().then(() => {
    mongoose.connection.close();
});

// deleteProject().then(() => {
//     mongoose.connection.close();
// });