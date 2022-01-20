require('console.table')
const viewRoles = (db, firstPrompt) => {
    console.log(`Viewing Roles\n`);

    db.query(`select role.id, role.title, role.salary, department.name from role left join department on role.department_id = 
    department.id;`, (err, data) => {
        if(err) {
            return reject(err);
        } 
        console.table(data)
        firstPrompt();
    })
   
    
}

module.exports = viewRoles;