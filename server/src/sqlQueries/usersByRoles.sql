-- Show the number of users by roles
ALTER TYPE "enum_Users_role" ADD VALUE 'admin';

INSERT INTO "Users" ("firstName", "lastName", "displayName", password, email, role) VALUES
('Ivan', 'Ivanov', 'Ivan', '123123', 'ivan@gmail.com', 'admin'),
('Petr', 'Petrov', 'Petr', '123123', 'petr@gmail.com', 'admin'),
('Andrey', 'Andreev', 'Andrey', '123123', 'andrey@gmail.com', 'admin'),
('Kiril', 'Kirilov', 'Kiril', '123123', 'kiril@gmail.com', 'customer');

SELECT role AS "Roles", count(*) AS "Count users" FROM "Users" GROUP BY role;