// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
// TODO: make all table of contents sections linkable to proper section in readme
const questions = [{
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
    default: "npm install",
},
{
    type: "input",
    message: "Please describe what the application is used for.",
    name: "usage",
    default: "Downloading inquirer will allow you to run the npm language in node.js, so that you can build out your application.",
},
{
    type: "input",
    message: "Please describe how to report issues.",
    name: "issues",
    default: "In the repository, navigate to the issues section and click on the link to report a bug/create an issue.",
},
{
    type: "list",
    message: "What license would you like to use?",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "none",],
    default: "MIT",
},
{
    type: "input",
    message: "Please describe how to contribute.",
    name: "contribution",
    default: "If you would like to contribute to this project, please fork the repo, create a new feature branch. Once you have finished, you can create a pull request.",
},
{
    type: "input",
    message: "What command should be used to run a test?",
    name: "tests",
    default: "npm run test",
},
{
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
    default: "cmv303"
},
{
    type: "input",
    message: "What is your email address?",
    name: "email",
    default: "moreiras.camila@gmail.com"
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    //first ask the user questions
    inquirer.prompt(questions)
    //then write a promise to get the answers
    .then((inquirerResponse) => {
        console.log("Generating your readme");
        //exectuting the promise
        writeToFile ("README.md", generateMarkdown({...inquirerResponse}))
    })
}


// Function call to initialize app
init()
;
