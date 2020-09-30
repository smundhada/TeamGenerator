const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const writeFile = util.promisify(fs.writeFile);

let members = [];

const roleQuests = [
    {
        type: "list",
        message: "What is your role in the team?",
        name: "teamRole",
        choices: ["Engineer", "Intern", "Manager"],
      },
];

const managerQuests = [
    {
      type: "input",
      message: "Could you please enter your first and last name",
      name: "name",
    },
    {
      type: "input",
      message: "Could you please provide your employee id number?",
      name: "idNumber",
    },
    {
      type: "input",
      message: "What is your employee email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your office number where you are located at?",
      name: "officeNumber",
    },
  ];

const engineerQuests = [
    {
      type: "input",
      message: "Could you please enter your first and last name",
      name: "name",
    },
    {
      type: "input",
      message: "Could you please provide your employee id number?",
      name: "idNumber",
    },
    {
      type: "input",
      message: "What is your employee email address?",
      name: "email",
    },
    {
      type: "input",
      message: "Could you give us your Github account username?",
      name: "github",
    },
];
  
const internQuests = [
    {
      type: "input",
      message: "Could you please enter your first and last name",
      name: "name",
    },
    {
      type: "input",
      message: "Could you please provide your employee id number?",
      name: "idNumber",
    },
    {
      type: "input",
      message: "What is your employee email address?",
      name: "email",
    },
    {
      type: "input",
      message: "Could you provide the university you are enrolled in currently?",
      name: "school",
    },
  ];

const generateQuests = [
    {
        type: "list",
        message: "Will you be adding a new member or generating the team?",
        name: "generate",
        choices: ["Add New Member", "Generate Team"],
      },
];

function init(){
    console.log("Hey there, in order to build a concise team layout please answer the following questions.");
    configureMem();
}

function configureMem(){
    inquirer.prompt(roleQuests).then(({ teamRole }) => {
        if (teamRole === "Engineer") {
            inquirer.prompt(engineerQuests).then((answers) => {
                engineer = new Engineer(
                                answers.name,
                                answers.idNumber,
                                answers.email,
                                answers.github,
                                answers.teamRole

                            );
                members.push(engineer);
                console.log(engineer);
                generateAgain();
            });
        }else if(teamRole === "Intern"){
            inquirer.prompt(internQuests).then((answers) => {
                intern = new Intern(
                                answers.name,
                                answers.idNumber,
                                answers.email,
                                answers.school,
                                answers.teamRole
                            );
                members.push(intern);
                console.log(intern);
                generateAgain();
            });
        }else if(teamRole === "Manager"){
            inquirer.prompt(managerQuests).then((answers) => {
                manager = new Manager(
                                answers.name,
                                answers.idNumber,
                                answers.email,
                                answers.officeNumber,
                                answers.teamRole

                            );
                members.push(manager);
                console.log(manager);
                generateAgain();
            });
        }
    });
}

function generateAgain(){
    inquirer.prompt(generateQuests).then(({ generate }) => {
        if (generate === "Add New Member"){
            configureMem();
        }else{
            createFile();
        }
    });
}

function createFile(){
    if (!fs.existsSync(OUTPUT_DIR)) {//checking if it exist else creating it 
        fs.mkdirSync(OUTPUT_DIR);
    }
    try {
        const readerMember = render(members);
        writeFile(outputPath, readerMember);
        console.log("Successfully wrote to team file check output folder");
    } catch(err) {
        console.log(err);
    }
}

init();
