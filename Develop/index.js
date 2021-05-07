// TODO: Include packages needed for this application

//GRAB FROM GENERATE MARKDOWN FILE
const generateMarkdown = require("./utils/generateMarkdown");  
//GRAB INQUIRER PACKAGE FROM PACKAGE.JSON
const inquirer = require("inquirer");
//BUILT IN NODE PACKAGE
const fs = require("fs");


// TODO: Create an array of questions for user input
inquirer.prompt ([ 
  {
    type: "input", 
    name: "title",
    message: "What is the name of your project?"
  },

  {
    type: "input", 
    name: "email",
    message: "What is your email?"
  },
  {
    type: "list",
    name: "license",
    message: "What license does your app use? (use arrows)",
    choices: ["Mozilla", "MIT", "Appache"]
  }

]).then (response => {
  fs.writeFileSync("README.md", generateMarkdown(response))
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
