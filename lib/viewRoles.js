const db = require('./sql_db')
console.log('This is from viewRoles.js');
const viewRoles = () => {
    // console.log(`Viewing Employees\n`);

    db.query('SELECT * FROM role', (err, data) => {
        if(err) {
            return reject(err);
        } resolve(data)
    })
   
    
}

module.exports = viewRoles();