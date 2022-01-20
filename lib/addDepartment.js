const db = require('./sql_db')
firstPrompt = require('../server')
const inquirer = require('inquirer');
const viewDepartments = require('./viewDepartments');
console.log('This is from addDepartment.js');

function addDepartment(db, firstPrompt) {
    inquirer
    .prompt ([
        {
            type: 'input',
            message: 'Enter New Department Name',
            name: 'departmentName'
        }
    ])
    .then(function (data) {
        const departmentName = data.departmentName;
        const query = `INSERT INTO department (name) VALUES ("${departmentName}")`;
    
    
    db.query(query, (err, data) => {
        if(err) {
            throw err;
        } console.table(data);
        viewDepartments(db, firstPrompt);
        console.log("New Department Added")
    })
    console.log(data);
})
}



module.exports = addDepartment;