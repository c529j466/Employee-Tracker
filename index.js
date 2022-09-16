// Requiring needed dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");

// Creating connection 
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "employee_trackerDB"
});

// Pulling in database info once it is updated
function updateDB() {
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
    updateDB();
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
        var query = "SELECT employee.id, first_name AS FirstName, last_name AS LastName, title AS Role, name AS Department, salary as Salary FROM employee INNER JOIN role ON employee.role_id = role.id INNER JOIN department ON role.department_id = department.id;";
        connection.query(query, function(err, res) {
          if (err) throw err;
          console.table(res);
          startTrackerQuestions();
        });
      }


// Function used to view all departments from database
function viewDepartments() {
    var query = "SELECT id, name AS Department FROM department";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      startTrackerQuestions();
    });
}

// Function used to view all roles from database
function viewRoles() {
    var query =
    "SELECT r.id, title AS Role, salary, name AS Department FROM role r LEFT JOIN department d ON department_id = d.id";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    startTrackerQuestions();
  });
}

// Function used to add an employee to database
function addEmployee() {
  updateDB();
    inquirer
    .prompt([
      {
        type: "input",
        name: "First_Name",
        message: "What is the employee's first name?"
      },
      {
        type: "input",
        name: "Last_Name",
        message: "What is the employee's last name?"
      },
      {
        name: "role",
        type: "list",
        message: "What is the employee's role?",
        choices: allroles
      }
    ])
    .then(function(answer) {
      var query = connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.First_Name,
          last_name: answer.Last_Name,
          role_id: answer.role
        },
        function(err, res) {
          if (err) throw err;
          console.table("\nEmployee Added.\n");
          startTrackerQuestions();
        }
      );
    });
}

// Function used to add a department to database
function addDepartment() {
    updateDB();
    inquirer
      .prompt([
        {
          type: "input",
          name: "new_department",
          message: "What department would you like to add?"
        }
      ])
      .then(function(answer) {
        var query = connection.query(
          "INSERT INTO department SET ?",
          {
            name: answer.new_department
          },
          function(err, res) {
            if (err) throw err;
            console.table("\nDepartment added.\n");
            updateDB();
            startTrackerQuestions();
          }
        );
      });
}

// Function used to add a role to database
function addRole() {
    updateDB();
  inquirer
    .prompt([
      {
        type: "input",
        name: "new_role",
        message: "What role would you like to add?"
      },
      {
        type: "input",
        name: "new_salary",
        message: "What is the salary of this role?"
      },
      {
        name: "department",
        type: "list",
        message: "Which department does this role belong to?",
        choices: alldepartments
      }
    ])
    .then(function(answer) {
      var query = connection.query(
        "INSERT INTO role SET ?",
        {
          title: answer.new_role,
          salary: answer.new_salary,
          department_id: answer.department
        },
        function(err, res) {
          if (err) throw err;
          console.table("\nRole added.\n");
          updateDB();
          startTrackerQuestions();
        }
      );
    });
}

// Function used to update an employee's role in the database
function updateEmployeeRole() {
}
