const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Architect = require("./lib/Architect");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var employeeArr = [];

getEmployees()

function getEmployees() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: "name",
            message: 'Enter employee name',
    },
{
        type: "input",
        name: "email",
        message: "Enter employees email",
    },
    {
        type: "input",
        name: "id",
        message: "Enter employee ID number",
    },
    {
        type: 'list',
        name: "role",
        message: 'Which employee would you like to add?',
        choices: [ "Manager",'"Engineer", "Architect" "Intern"],
},
// Manager extra questions
        {
            type: "input",
            name: "officeNum",
            message: "Enter office number",
            when: (answers) => answers.role === "Manager",
        },
    // Engineer extra questions
        {
                type: "input",
                name: "github",
                message: "Enter their Github address",
                when: (answers) => answers.role === "Engineer",
            },
    // Architect extra questions
        {
            type: "input",
            name: "portfolio",
            message: "Enter their portfolio address",
            when: (answers) => answers.role === "Architect",
        },
// Intern extra questions
        {
            type: "input",
            name: "school",
            message: "Enter their school",
            when: (answers) => answers.role === "Intern",
        },
        {
            type: "confirm",
            message: "Would you like to add another employee?",
            name: "addEmployee",
        },
    ]).then((res) => {
        if (res.role === "Manager") {
            employee = new Manager(res.name, res.email, res.id, res.officeNum)
        }
        if (res.role === "Engineer") {
            employee = new Engineer(res.name, res.email, res.id, res.github)
        }
        if (res.role === "Architect") {
            employee = new Architect(res.name, res.email, res.id, res.portfolio)
        }
        if (res.role === "Intern") {
            employee = new Intern(res.name, res.email, res.id, res.school)
        }
        employeeArr.push(employee)
        if (res.addEmployee) { getEmployees() }
        else {
            fs.writeFile(outputPath, render(employeeArr),
            (err) => { if (err) {
                throw err;
            } else {
                console.log("created html file")
            } 
            });
        }
    }).catch((err) => console.log(err))
}




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
