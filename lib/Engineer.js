// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, role, id, email, github ) {
        super(name, role, id);
        this.email = email;
        this.github = github;
    }
    getEmail(email) {
    return this.email;
    }
    getRole(role) {
        return this.email;
    }
}



module.exports = Engineer;