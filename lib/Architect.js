// TODO: Write code to define and export the Architect class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Architect extends Employee {
    constructor(name, id, email, portfolio) {
        super(name, id, email);
        this.portfolio = portfolio;
    }

    getRole() {
        return "Architect";
    }
    getPortfolio() {
    return this.portfolio;
    }
}



module.exports = Architect;