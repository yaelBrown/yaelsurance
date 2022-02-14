create table users (
id INT(10) UNSIGNED auto_increment primary key,
fname VARCHAR(30) NOT NULL,
lname VARCHAR(30) NOT NULL,
password VARCHAR(255) NOT NULL,
email VARCHAR(100) NOT NULL,
AGE INT(3) NOT NULL
);