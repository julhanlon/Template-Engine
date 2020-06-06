// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, role, id, email, officeNum) {
    super(name, role, id);
    this.email = email;
    this.officeNum = this.officeNum;
    }
    getRole(role){
        return this.role;
    }
    getOfficeNumber(officeNum){
        return this.officeNum;
    }
}


module.exports = Manager;