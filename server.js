const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
require('dotenv').config();
const PORT = 3001;
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

db.connect(function (err) {
    if (err) throw err;
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
    .then(function(response) {
        switch (response.task) {
            case "View All Employees":
                viewEmployees(db, firstPrompt);
                break;
            
            case "Add Employee":
                addEmployee(db, firstPrompt, viewEmployees);
                break;

            case "Update Employee Role":
                updateEmployeeRole(db, firstPrompt, viewEmployees);
                break;

            case "View All Roles":
                viewRoles(db, firstPrompt);
                break;

            case "Add Role":
                addRole(db, firstPrompt, viewRoles);
                break;

            case "View All Departments":
                viewDepartments(db, firstPrompt);
                break;

            case "Add Department":
                addDepartment(db, firstPrompt, viewDepartments);
                break;

            case "Quit":
                db.end();
                break;

            default:
            break;
        }
    });

}

// module.exports = firstPrompt;



