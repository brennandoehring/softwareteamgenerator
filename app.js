const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employeeList = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

createEmployee();

function createEmployee() {
    promptUser().then(function (value) {
        let emp = new Employee(value.name, value.id, value.email);
        if (value.role === "Engineer") {
            promptEngineer().then(function (value) {
                let eng = new Engineer(emp.name, emp.id, emp.email, value.github);
                employeeList.push(eng);
                if (value.anotherEmployee === "Yes") {
                    createEmployee();
                } else {
                    fs.writeFile(outputPath, render(employeeList), function(err) {
                        if (err) {
                            throw err;
                        }
                    });
                }
            });
        } 
        else if (value.role === "Intern") {
            promptIntern().then(function (value) {
                let int = new Intern(emp.name, emp.id, emp.email, value.school);
                employeeList.push(int);
                if (value.anotherEmployee === "Yes") {
                    createEmployee();
                } else {
                    fs.writeFile(outputPath, render(employeeList), function(err) {
                        if (err) {
                            throw err;
                        }
                    });
                }
            });
        }
        else {
            promptManager().then(function (value) {
                let man = new Manager(emp.name, emp.id, emp.email, value.officeNumber);
                employeeList.push(man);
                if (value.anotherEmployee === "Yes") {
                    createEmployee();
                } else {
                    fs.writeFile(outputPath, render(employeeList), function(err) {
                        if (err) {
                            throw err;
                        }
                    });
                }
            });
        }
    });
}

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter employee name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee id number"
        },
        {
            type: "input",
            name: "email",
            message: "Enter employee email"
        },
        {
            type: "list",
            name: "role",
            message: "What role is this employee?",
            choices: ["Engineer", "Intern", "Manager"]
        }
    ]);
}

function promptEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is this engineer's github profile?"
        },
        {
            type: "list",
            name: "anotherEmployee",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"]
        }
    ]);
}

function promptIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "What school does this intern attend?"
        },
        {
            type: "list",
            name: "anotherEmployee",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"]
        }
    ]);
}

function promptManager() {
    return inquirer.prompt([
        {
            type: "input",
            name: "officeNumber",
            message: "What office number does this manager reside?"
        },
        {
            type: "list",
            name: "anotherEmployee",
            message: "Would you like to add another employee?",
            choices: ["Yes", "No"]
        }
    ]);
}