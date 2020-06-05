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

const John = new Engineer("John", "Engineer", 4, "john@gmail.com", "git");

John.updateEmail("john2@gmail.com")

console.log(John.email);


module.exports = Engineer;