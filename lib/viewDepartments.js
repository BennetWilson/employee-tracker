require('console.table')

const viewDepartments = (db, firstPrompt) => {
    console.log(`Viewing Departments\n`);

    db.query('SELECT * FROM department', (err, data) => {
        if(err) {
            return reject(err);
        } 
        console.table(data);
        firstPrompt();
    })

    
}

module.exports = viewDepartments;