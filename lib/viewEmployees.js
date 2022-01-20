require('console.table')
const viewEmployees = (db, firstPrompt) => {
    console.log(`Viewing Employees\n`);
    let query = `select employee.id, employee.first_name, employee.last_name, role.title, department.name as department, role.salary, concat(manager.first_name,' ',manager.last_name) as manager from employee LEFT JOIN role 
    ON employee.role_id = role.id
  LEFT JOIN department 
  ON department.id = role.department_id
  LEFT JOIN employee manager
    ON manager.id = employee.manager_id`

    db.query(query, (err, data) => {
        if(err) {
            return reject(err);
        } 
        console.table(data)
        firstPrompt();
    })
  
    
}

module.exports = viewEmployees;