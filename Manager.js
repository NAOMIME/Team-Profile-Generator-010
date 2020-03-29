//`Employee`'s properties and methods, `Manager` will also have:
//- officeNumber
//- getRole() // Overridden to return 'Manager'

var inquirer = require('inquirer');
const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber
    }
}

module.exports = Manager