const Employee = require("./employee");

class Engineer extends Employee {
  constructor(title, name, id, email, role, github) {
    super(title, name, id, email, "Engineer");
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
