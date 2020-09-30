class Employee {

    constructor(name, idNumber, email, teamRole) {
      this.name = name;
      this.teamRole = "Employee";//OVERRIDE
      this.idNumber = idNumber;
      this.email = email;
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

}
  
  module.exports = Employee;