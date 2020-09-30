const Employee = require("./Employee.js");

class Intern extends Employee {

  constructor(name, idNumber, email, school, teamRole) {
    super(name, idNumber, email, teamRole);
    this.teamRole = "Intern";
    this.school = school;
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

    getSchool() {
        return this.school;
    }
    
}

module.exports = Intern;