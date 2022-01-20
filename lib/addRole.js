const inquirer = require('inquirer');
const db = require('./sql_db');
const viewRoles = require('./viewRoles');


function addRole(db, firstPrompt) {
    db.query('select * from department', (err, data) => {
        const departments = data.map(department =>{
            return  {
                name: department.name,
                value: department.id
            }
         
        }) 

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
            type: 'list',
            message: 'What Department is this Role Under?',
            name: 'roleId',
            choices: departments
        }
    ])
    .then(function (data) {
        const roleTitle = data.roleTitle;
        const roleSalary = data.roleSalary;
        const roleId = data.roleId
        const query = `INSERT INTO role (title, salary, department_id) VALUES ("${roleTitle}", "${roleSalary}", ${roleId})`;
    
    
    db.query(query, (err, data) => {
        if(err) {
            throw err;
        } console.table(data);
        viewRoles(db, firstPrompt);
        console.log("New Role Added")
    })
    console.log(data);
})
})
}


module.exports = addRole;