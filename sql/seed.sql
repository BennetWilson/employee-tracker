INSERT INTO department (id, name)
VALUES (100, "Sales"),
       (110, "Engineering"),
       (120, "Finance"),
       (130, "Legal");

INSERT INTO role (id, title, salary, deparment_id)
VALUES (1, "Sales Lead", 65000, 100),
       (2, "Sales Person", 50000, 100),
       (3, "Lead Engineer", 75000, 110),
       (4, "Software Engineer", 65000, 110),
       (5, "Account Manager", 85000, 120),
       (6, "Accountant", 75000, 120),
       (7, "Legal Team Lead",  95000, 130),
       (8, "Lawyer", 85000, 130);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Ben', 'Wilson', 1, null),
       (2, 'Phil', 'West', 2, 100),
       (3, 'Bob', 'South', 3, null),
       (4, 'George', 'East', 4, 110),
       (5, 'Lou', 'North', 5, null),
       (6, 'Frank', 'Tank', 6, 120),
       (7, 'Paige', 'Hoover', 7, null),
       (8, 'George', 'Washington', 8, 130);
       