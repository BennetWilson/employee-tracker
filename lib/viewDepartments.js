const db = require('./sql_db')
console.log('This is from viewDepartments.js');
const viewDepartments = () => {
    // console.log(`Viewing Employees\n`);

    db.query('SELECT * FROM department', (err, data) => {
        if(err) {
            return reject(err);
        } resolve(data)
    })

    
}

module.exports = viewDepartments();