const Employee = require("./Employee.js");

class Manager extends Employee {
    
  constructor(name, idNumber, email, officeNumber, teamRole) {
    super(name, idNumber, email, teamRole);
    this.teamRole = "Manager";//OVERRIDE
    this.officeNumber = officeNumber;
  }

    getName() {
        return this.name;
    }

    getRole() {
        return this.teamRole;
    }

    getId() {
        return this.idNumber;
    }

    getEmail() {
        return this.email;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;