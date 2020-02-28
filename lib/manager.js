const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, title, email, role, officeNumber) {
    super(name, id, title, email, "Manager");
    this.officeNumber = officeNumber;
  }
}
myManger = new Manager("Cyrus", "123", "pm", "gmail", "manager", 123);
console.log(myManger);
module.exports = Manager;
