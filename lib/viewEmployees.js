const db = require('./sql_db');
console.log('This is from viewEmployees.js')
const viewEmployees = () => {
    // console.log(`Viewing Employees\n`);

    db.query('SELECT * FROM employee', (err, data) => {
        if(err) {
            return reject(err);
        } resolve(data)
    })
  
    
}

module.exports = viewEmployees();