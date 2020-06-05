// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, position, id, email, school){
        super(name);
        super(position);
        super(id);
        this.email = email;
        this.school = school;
    }
}