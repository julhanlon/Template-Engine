// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, position, id, email, github ) {
        super(name);
        super(position);
        super(id);
        this.email = email;
        this.github = github;
    }
}
