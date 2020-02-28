const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const teamArr = [];

const employeeRole = {
  type: "list",
  name: "role",
  message: "What employee type are you creating?",
  choices: ["Employee", "Manager", "Engineer", "Intern", "Done"]
};

const employeeInput = [
  {
    type: "input",
    name: "name",
    message: "What is the Employee's name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is your id?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your title?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  }
];

const managerInput = [
  {
    type: "input",
    name: "name",
    message: "What is the Manager's name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is your id?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your title?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?"
  }
];

const engineerInput = [
  {
    type: "input",
    name: "name",
    message: "What is the Engineer's name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is your id?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your title?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?"
  }
];

const internInput = [
  {
    type: "input",
    name: "name",
    message: "What is the Intern's name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is your id?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your title?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },
  {
    type: "input",
    name: "school",
    message: "What school do you attend?"
  }
];

function init() {
  managerQuestions();
}

function questions() {
  inquirer.prompt(employeeRole).then(employeeRole => {
    //console.log(employeeRole.role);
    if (employeeRole.role === "Employee") {
      inquirer.prompt(employeeInput).then(answers => {
        employee = new Employee(
          answers.name,
          answers.id,
          answers.title,
          answers.email,
          employeeRole.role
        );
        console.log(employee);
        teamArr.push(employee);
        questions();
      });
    } else if (employeeRole.role === "Manager") {
      inquirer.prompt(managerInput).then(answers => {
        console.log(answers.name);
        manager = new Manager(
          answers.name,
          answers.id,
          answers.title,
          answers.email,
          employeeRole.role,
          answers.officeNumber
        );
        //console.log(manager);
        teamArr.push(manager);
        questions();
      });
    } else if (employeeRole.role === "Engineer") {
      inquirer.prompt(engineerInput).then(answers => {
        engineer = new Engineer(
          answers.name,
          answers.id,
          answers.title,
          answers.email,
          employeeRole.role,
          answers.github
        );
        //console.log(engineer);
        teamArr.push(engineer);
        questions();
      });
    } else if (employeeRole.role === "Intern") {
      inquirer.prompt(internInput).then(answers => {
        intern = new Intern(
          answers.name,
          answers.id,
          answers.title,
          answers.email,
          employeeRole.role,
          answers.school
        );
        console.log(intern);
        teamArr.push(intern);
        questions();
      });
    } else if (employeeRole.role === "Done") {
      console.log("End application");
      console.log(teamArr);
    }
  });
}

function managerQuestions() {
  inquirer.prompt(managerInput).then(answers => {
    manager = new Manager(
      answers.name,
      answers.id,
      answers.title,
      answers.email,
      employeeRole.role,
      answers.officeNumber
    );
    console.log(manager);
    teamArr.push(manager);
    questions();
  });
}

init();

module.exports = teamArr;

function generateHTML(teamArr) {}
