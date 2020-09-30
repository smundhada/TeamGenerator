const Employee = require("./Employee.js");

class Engineer extends Employee {

  constructor(name, idNumber, email, github, teamRole) {
    super(name, idNumber, email, teamRole);
    this.teamRole = "Engineer";//OVERRIDE
    this.github = github;
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

    getGithub() {
        return this.github;
    }
    
}

module.exports = Engineer;