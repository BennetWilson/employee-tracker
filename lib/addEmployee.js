const db = require('./sql_db')
firstPrompt = require('../server')
const inquirer = require('inquirer');
const viewEmployees = require('./viewEmployees');
console.log('This is from addEmployee.js');

function addEmployee(db, firstPrompt) {
    db.query('select * from role', (err, data) => {
        const roles = data.map(role =>{
            return  {
                name: role.title,
                value: role.id
            }
         
        }) 

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
                type: 'list',
                message: 'What Role Id Will This Employee Have? (1-8)',
                name: 'roleId',
                choices: roles
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
            let managerId = data.managerId
            if(managerId.length === 0){
                managerId = null
            }
            const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", "${roleId}", ${managerId})`;
        
        
        db.query(query, (err, data) => {
            if(err) {
                throw err;
            } console.table(data);
            
            viewEmployees(db, firstPrompt);
            console.log("New Employee Added")
        })
        console.log(data);    
           
   
    })
   
    })
   
 
}





module.exports = addEmployee;