const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, title, email, role, github) {
    super(name, id, title, email, "Engineer");
    this.github = github;
  }
}

module.exports = Engineer;
