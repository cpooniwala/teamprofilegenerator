const Employee = require("./employee");

class Intern extends Employee {
  constructor(title, name, id, email, role, school) {
    super(title, name, id, email, "Intern");
    this.school = school;
  }
}
myIntern = new Intern(
  "dev boi",
  "Cyrus",
  "123",
  "cpooniwala@gmail.com",
  "Intern",
  "IU"
);

module.exports = Intern;

console.log(myIntern);
