const Employee = require("./employee");

class Manager extends Employee {
  constructor(title, name, id, email, role, officeNumber) {
    super(title, name, id, email, "Manager");
    this.officeNumber = officeNumber;
  }
}
myManger = new Manager(
  "PM",
  "Cyrus",
  "123",
  "cpooniwala@gmail.com",
  "Manager",
  "123"
);
module.exports = Manager;

console.log(myManger);
