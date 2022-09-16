// Requiring needed dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");
const consoleTable = require("console.table");

// Creating connection 
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_trackerDB"
});

// Pulling in database info to server
function updateServer() {
    connection.query("SELECT * from role", function(error, res) {
      allroles = res.map(role => ({ name: role.title, value: role.id }));
    });
  
    connection.query("SELECT * from department", function(error, res) {
      alldepartments = res.map(dept => ({ name: dept.name, value: dept.id }));
    });
  
    connection.query("SELECT * from employee", function(error, res) {
      allemployees = res.map(employee => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id
      }));
    });
  }
//   Throw error if one is found or print message to console and start prompt of questions
  connection.connect(function(err) {
    if (err) throw err;
    console.log("\nThank you for using Employee Tracker!\n");
    startTrackerQuestions();
    updateServer();
  });

//   Prompts user to select which action that want to take and then calls the functions associated with their selection
  function startTrackerQuestions() {
    inquirer
    .prompt({
      name: "questions",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Departments",
        "View All Roles",
        "Add Employee",
        "Add Department",
        "Add Role",
        "Update Employee Role",
        "Exit"
      ]
    })
    .then(function(answer) {
      switch (answer.questions) {
        case "View All Employees":
          viewEmployees();
          break;

        case "View All Departments":
          viewDepartments();
          break;

        case "View All Roles":
          viewRoles();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRole();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;

        case "Exit":
          connection.end();
          break;
      }
    });
}

// Function used to view all employees from database
function viewEmployees() {
}

// Function used to view all departments from database
function viewDepartments() {
}

// Function used to view all roles from database
function viewRoles() {
}

// Function used to add an employee to database
function addEmployee() {
}

// Function used to add a department to database
function addDepartment() {
}

// Function used to add a role to database
function addRole() {
}

// Function used to update an employee's role in the database
function updateEmployeeRole() {
}
