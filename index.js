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