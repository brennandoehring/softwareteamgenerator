const iquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const Employee = require("..\softwareteamgenerator\lib\Employee");
const Engineer = require("..\softwareteamgenerator\lib\Engineer");
const Intern = require("..\softwareteamgenerator\lib\Intern");
const Manager = require("..\softwareteamgenerator\lib\Manager");
const generateEmployee = require("..\softwareteamgenerator\templates\employee");
const generateEngineer = require("..\softwareteamgenerator\templates\engineer");
const generateIntern = require("..\softwareteamgenerator\templates\intern");
const generateManager = require("..\softwareteamgenerator\templates\manager");
const inquirer = require("inquirer");
const employeeList = [];

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
    ])
}