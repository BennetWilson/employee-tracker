const db = require('./sql_db')
console.log('This is from updateEmployeeRole.js')

const updateEmployeeRole = () => {

    inquirer
    .prompt ([
        {
            type: 'input',
            message: "Enter The Employee's ID That You'd Like To Update",
            name: 'updateId'
        },
        {
            type: 'input',
            message: 'Enter The New Role ID For This Employee',
            name: 'updateRole'
        }
    ])
    .then(function (data) {
        const updateRole = data.updateRole;
        const updateId = data.updateId
        const query = `UPDATE employee SET role_id = "${updateRole}" WHERE id = "${updateId}"`;
    
    
    db.query(query, (err, data) => {
        if(err) {
            throw err;
        } console.table(data);
        firstPrompt();
    })
    console.log(data);
    
})
}


module.exports = updateEmployeeRole();