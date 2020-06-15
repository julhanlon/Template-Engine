// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, role, id, email, officeNum) {
    super(name, role, id, email);
    this.officeNum = officeNum;
    }
    getRole(role){
        return "Manager";
    }
    getOfficeNumber(officeNum){
        return this.officeNum;
    }
}


module.exports = Manager;