const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
require('dotenv').config();
// const PORT = 3001;
const db = require('./lib/sql_db');

// Modules
const viewEmployees = require('./lib/viewEmployees');
const addEmployee = require('./lib/addEmployee');
const updateEmployeeRole = require('./lib/updateEmployeeRole');
const viewRoles = require('./lib/viewRoles');
const addRole = require('./lib/addRole');
const viewDepartments = require('./lib/viewDepartments');
const addDepartment = require('./lib/addDepartment');
// end of modules



// const db = mysql.createConnection({
//     host: "localhost",
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_DATABASE
// })



db.connect(function (err) {
    if (err) throw err;
    console.log(`
    ╔═══╗─────╔╗──────────────╔═╗╔═╗
    ║╔══╝─────║║──────────────║║╚╝║║
    ║╚══╦╗╔╦══╣║╔══╦╗─╔╦══╦══╗║╔╗╔╗╠══╦═╗╔══╦══╦══╦═╗
    ║╔══╣╚╝║╔╗║║║╔╗║║─║║║═╣║═╣║║║║║║╔╗║╔╗╣╔╗║╔╗║║═╣╔╝
    ║╚══╣║║║╚╝║╚╣╚╝║╚═╝║║═╣║═╣║║║║║║╔╗║║║║╔╗║╚╝║║═╣║
    ╚═══╩╩╩╣╔═╩═╩══╩═╗╔╩══╩══╝╚╝╚╝╚╩╝╚╩╝╚╩╝╚╩═╗╠══╩╝
    ───────║║──────╔═╝║─────────────────────╔═╝║
    ───────╚╝──────╚══╝─────────────────────╚══╝`);
    firstPrompt();
});

function firstPrompt() {
    inquirer
      .prompt({
        type: "list",
        name: "task",
        message: "Would you like to do?",
        choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Quit"
        ]
    })
    .then(function(task) {
        switch (task.firstPrompt) {
            case "View All Employees":
                viewEmployees();
                break;
            
            case "Add Employee":
                addEmployee();
                break;

            case "Update Employee Role":
                updateEmployeeRole();
                break;

            case "View All Roles":
                viewRoles();
                break;

            case "Add Role":
                addRole();
                break;

            case "View All Departments":
                viewDepartments();
                break;

            case "Add Department":
                addDepartment();
                break;

            case "Quit":
                connection.end();
                break;

            default:
            break;
        }
    });

}




