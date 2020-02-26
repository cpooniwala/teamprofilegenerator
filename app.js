const fs = require("fs");
const inquirer = require("inquirer");

const employeeRole = {
  type: "list",
  name: "role",
  message: "What employee type are you creating?",
  choices: ["Employee", "Manager", "Engineer", "Intern"]
};

const employee = [
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "name",
    message: "What is your id?"
  }
];

const manager = [
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "name",
    message: "What is your id?"
  },
  {
    type: "input",
    name: "name",
    message: "What is your office number?"
  }
];

const engineer = [
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "name",
    message: "What is your id?"
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?"
  }
];

const intern = [
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "name",
    message: "What is your id?"
  },
  {
    type: "input",
    name: "school",
    message: "What school do you attend?"
  }
];

function init() {
  inquirer.prompt(employeeRole).then(employeeRole => {
    console.log(employeeRole.role);
    if (employeeRole.role === "Employee") {
      inquirer.prompt(employee);
    } else if (employeeRole.role === "Manager") {
      inquirer.prompt(manager);
    } else if (employeeRole.role === "Engineer") {
      inquirer.prompt(engineer);
    } else {
      inquirer.prompt(intern);
    }
  });
}

init();
