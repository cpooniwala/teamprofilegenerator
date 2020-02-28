const Employee = require("./employee");

class Intern extends Employee {
  constructor(name, id, title, email, role, school) {
    super(name, id, title, email, "Intern");
    this.school = school;
  }
}
myIntern = new Intern("Cyrus", "123", "cpooniwala@gmail.com", "Intern", "IU");

module.exports = Intern;

console.log(myIntern);
