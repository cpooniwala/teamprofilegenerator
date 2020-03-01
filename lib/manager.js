const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, title, email, role, officeNumber) {
    super(name, id, title, email, "Manager");
    this.officeNumber = officeNumber;
  }
}
module.exports = Manager;
