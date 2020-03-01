const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, title, email, role, school) {
    super(name, id, title, email, "Intern");
    this.school = school;
  }
}

module.exports = Intern;
