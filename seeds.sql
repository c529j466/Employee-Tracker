USE employee_trackerDB;

-- Departments
INSERT INTO department (name)
VALUES ("Sales");

INSERT INTO department (name)
VALUES ("Engineering");

INSERT INTO department (name)
VALUES ("Finance");

INSERT INTO department (name)
VALUES ("Legal");

-- roles
INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1 );

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, 1 );

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 2 );

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, 2 );

INSERT INTO role (title, salary, department_id)
VALUES ("Account Manager", 155000, 3 );

INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, 3 );

INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 250000, 4 );

INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 190000, 4 );


-- employees 
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Juju", "Smith-Schuster", 1);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Mecole", "Hardman", 2);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Patrick", "Mahomes", 3);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Travis", "Kelce", 4);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Creed", "Humphrey", 5);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Clyde", "Edwards-Helaire", 6);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Sky", "Moore", 7);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Chris", "Jones", 8);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Frank", "Clark", 2);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Tommy", "Townsend", 4);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Justin", "Reid", 6);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Juan", "Thornhill", 8);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Nick", "Bolton", 2);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Willie", "Gay", 4);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Jody", "Fortson", 6);
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("George", "Karlaftis", 8);