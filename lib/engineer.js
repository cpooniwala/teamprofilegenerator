const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, title, email, role, github) {
    super(name, id, title, email, "Engineer");
    this.github = github;
  }
}

myEngineer = new Engineer(
  "dev eng",
  "Cyrus",
  "123",
  "cpooniwala@gmail.com",
  "Engineer",
  "cpooniwala"
);
module.exports = Engineer;

console.log(myEngineer);
