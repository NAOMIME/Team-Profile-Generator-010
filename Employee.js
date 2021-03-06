
//The first class is an `Employee` parent class with the following properties and
//methods:
//- name
//- id
//- title
//- getName()
//- getId()
//- getEmail()
//- getRole() // Returns 'Employee'

const inquirer = require("inquirer")

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return "Employee"
    }
}

module.exports = Employee

