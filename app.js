const iquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Employee = require("..\softwareteamgenerator\lib\Employee");
const Engineer = require("..\softwareteamgenerator\lib\Engineer");
const Intern = require("..\softwareteamgenerator\lib\Intern");
const Manager = require("..\softwareteamgenerator\lib\Manager");
const generateEmployee = require("..\softwareteamgenerator\templates\employee");
const generateEngineer = require("..\softwareteamgenerator\templates\engineer");
const generateIntern = require("..\softwareteamgenerator\templates\intern");
const generateManager = require("..\softwareteamgenerator\templates\manager");
const employeeList = [];

