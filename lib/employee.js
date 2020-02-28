class Employee {
  constructor(name, id, title, email, role) {
    this.name = name;
    this.id = id;
    this.title = title;
    this.email = email;
    this.role = role;
  }
  getName() {
    console.log(this.name);
  }
  getId() {
    console.log(this.id);
  }
  getEmail() {
    console.log(this.email);
  }
  getRole() {
    console.log(this.role);
  }
}

module.exports = Employee;
myEmployee = new Employee(
  "Cyrus",
  "123",
  "PM",
  "cpooniwala@gmail.com",
  "Employee"
);
console.log(myEmployee);
