const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var employees = [];

inquirer.prompt([
    {type: "list",
    name: "Manager",
    message: "Choose Manager",
    },
    {
        type: "input",
        name: "name",
        message: "Enter Manager's name",
    },
    {
        type: "input",
        name: "email",
        message: "Enter employees email",
    },
])




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
        message: "Enter employees ID number",
        validate: "must enter a number",
    },
    {
        type: 'list',
        name: "Employee",
        message: 'What type of employee would you like to add?',
        choices: ['Engineer', 'Intern', "No more Employees"],
},
    ])
    .then(answers => {
    console.info('Answer:', answers.reptile);
    switch (answers.Employee) {      
        case "Engineer":                        
            // ask engineer questions;  
            inquirer.prompt([
                { type: "input",
                name: "github",
                message: "Please enter github address",
                validate: "Must enter a valid github url,"
                },
            ])
            getEmployees();        
            break;
        case "Intern":                         
            //ask intern questions;
            inquirer.prompt([
                { type: "input",
                name: "school",
                message: "Please enter school",
                validate: "Must enter a school,"
                },
            ])
            getEmployees();
            break;
        default:                        // else...
            //stop the getEmployees function
            const html = render(employees); 
            //use fs to write the html file
            fs.writeFile("team.html", )
    };
    });
}

getEmployees();


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
