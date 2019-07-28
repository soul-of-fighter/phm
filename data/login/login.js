const fs = require('fs');
const md5 = require('md5-node');

function createLogin() {
    let employee = {};
    employee.account = "admin";
    employee.password = md5("admin").toUpperCase();
    fs.writeFileSync(__dirname + '/login.json', JSON.stringify(employee));
}

module.exports = {
    createLogin
}