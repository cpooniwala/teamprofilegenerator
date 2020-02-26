const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    message: "Enter your GitHub username",
    name: "username"
  }
];

function init() {
  inquirer.prompt(questions);
}

init();
