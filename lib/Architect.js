// TODO: Write code to define and export the Architect class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Architect extends Employee {
    constructor(name, role, id, email, portfolio) {
        super(name, role, id);
        this.email = email;
        this.portfolio = portfolio;
    }
    getEmail(email) {
    return this.email;
    }
    getRole(role) {
        return this.role;
    }
}



module.exports = Architect;