// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
    default: "Camila",
},
{
    type: "input",
    message: "What is your email address?",
    name: "email",
    default: "moreiras.camila@gmail.com",
},
{
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    default: "Readme Generator",
},
{
    type: "input",
    message: "Please describe your project.",
    name: "description",
    default: "This project generates a README.md file using the inquirer library package and node.js.",
},
{
    type: "input",
    message: "Please describe how to install your project.",
    name: "installation",
    default: "npm install inquirer@8.2.4",
},
{
    type: "input",
    message: "Please describe what the application is used for.",
    name: "usage",
    default: "Downloading inquirer will allow you to run the npm language in node.js, so that you can build out your application.",
},
{
    type: "input",
    message: "Please describe how to report bugs.",
    name: "bugs",
    default: "In the repository, navigate to the issues section and click on the link to report a bug/create an issue.",
},
{
    type: "list",
    message: "What license would you like to use?",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPL 3.0",],
    default: "MIT",
},
{
    type: "input",
    message: "Please describe how to contribute.",
    name: "contribution",
    default: "If you would like to contribute to this project, please fork the repo, create a new feature branch. Once you have finished, you can create a pull request.",
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        fs.writeToFile("README.md", generateMarkdown(data), (err) => 
        err ? console.error(err) : console.log("Success!"));
    })
    .then((response.name) => console.log(response));
    //!do I have to do this for all questions?
}

//!Is this function needed? It wasn't in TODO but seems like it should be here.
function inquirerResponse(response) {

}


// Function call to initialize app
init()
;
