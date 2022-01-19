const inquirer = require('inquirer');
const db = require('./sql_db');
console.log('This is from addRole.js');

function addRole() {
    inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Enter New Role Title',
            name: 'roleTitle'
        },
        {
            type: 'input',
            message: 'Enter Role Salary',
            name: 'roleSalary'
        },
        {
            type: 'input',
            message: 'What Department is this Role Under? (100: Sales, 110: Engineering, 120: Finance, 130: Legal)',
            name: 'roleId'
        }
    ])
    .then(function (data) {
        const roleTitle = data.roleTitle;
        const roleSalary = data.roleSalary;
        const roleId = data.roleId
        const query = `INSERT INTO role (title, salary, department_id) VALUES ("${roleTitle}", "${roleSalary}", "${roleId}")`;
    
    
    db.query(query, (err, data) => {
        if(err) {
            throw err;
        } console.table(data);
        firstPrompt();
    })
    console.log(data);
})
}


module.exports = addRole();