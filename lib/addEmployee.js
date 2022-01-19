const db = require('./sql_db')

const inquirer = require('inquirer');
console.log('This is from addEmployee.js');

function addEmployee() {
    inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Enter Employee First Name',
            name: 'firstName'
        },
        {
            type: 'input',
            message: 'Enter Employee Last Name',
            name: 'lastName'
        },
        {
            type: 'input',
            message: 'What Role Id Will This Employee Have? (1-8)',
            name: 'roleId'
        },
        {
            type: 'input',
            message: "Enter the employee's manager ID (Leave Blank if Manager)",
            name: 'managerId'
        }
    ])
    .then(function (data) {
        const firstName = data.firstName;
        const lastName = data.lastName;
        const roleId = data.roleId;
        const managerId = data.managerId
        const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", "${roleId}", "${managerId}")`;
    
    
    db.query(query, (err, data) => {
        if(err) {
            throw err;
        } console.table(data);
        firstPrompt();
    })
    console.log(data);
})
}





module.exports = addEmployee();