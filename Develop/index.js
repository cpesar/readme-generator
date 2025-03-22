const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the name of your project?",
    },

    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },

    {
      type: "input",
      name: "github",
      message: "What is your GitHub username",
    },

    {
      type: "list",
      name: "license",
      message: "What license does your app use? (use arrows)",
      choices: ["Mozilla", "MIT", "Apache"],
    },

    {
      type: "input",
      name: "description",
      message: "Please provide a brief description of your project",
    },

    {
      type: "input",
      name: "installation",
      message: "Please provide the installation instructions for your project",
    },

    {
      type: "input",
      name: "usage",
      message: "What is your project used for?",
    },

    {
      type: "input",
      name: "contribution",
      message: "Are there any contributors for your project?",
    },

    {
      type: "input",
      name: "tests",
      message: "Is there a test?",
    },
  ])

  .then((response) => {
    fs.writeFileSync("README.md", generateMarkdown(response));

    console.log("Successfully Wrote to README.md file");
  });
