const db = require('./sql_db')

const inquirer = require('inquirer');
console.log('This is from addDepartment.js');

function addDepartment() {
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
        firstPrompt();
    })
    console.log(data);
})
}



module.exports = addDepartment();