// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, position, id, email, officeNum) {
    super(name);
    super(position);
    super(id);
    this.email = email;
    this.officeNum = this.officeNum
    }
}