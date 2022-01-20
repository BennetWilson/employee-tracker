require('console.table')
const inquirer = require('inquirer')
const updateEmployeeRole = (db, firstPrompt) => {
console.log('Updating Employee Roles')
const viewEmployees = require('./viewEmployees')
db.query('select * from employee', (err, data) => {
    const employee = data.map(employee =>{
        return  {
            name: employee.first_name,
            value: employee.id
        }
     
    }) 

db.query('select * from role', (err, data) => {
    const role = data.map(role =>{
        return  {
            name: role.title,
            value: role.id
        }
     
    }) 

    inquirer
    .prompt ([
        {
            type: 'list',
            message: "Enter The Employee's ID That You'd Like To Update",
            name: 'updateId',
            choices: employee
        },
        {
            type: 'list',
            message: 'Enter The New Role ID For This Employee',
            name: 'updateRole',
            choices: role
        }
    ])
    .then(function (data) {
        const updateRole = data.updateRole;
        const updateId = data.updateId
        const query = `UPDATE employee SET role_id = ${updateRole} WHERE id = ${updateId}`;
    
    
    db.query(query, (err, data) => {
        if(err) {
            throw err;
        } console.table(data);
        viewEmployees(db, firstPrompt);
        console.log('Employee Role Updated')
    })
    console.log(data);
    
})
})
})
}


module.exports = updateEmployeeRole;