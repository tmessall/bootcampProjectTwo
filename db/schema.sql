DROP DATABASE IF EXISTS congo_db;
CREATE DATABASE congo_db;

USE congo_db;

CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    userID INTEGER NOT NULL,
    description TEXT NOT NULL,
    likes INT default 0,
    dislikes INT default 0,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40) NOT NULL,
    password TEXT NULL,
    createdAt TIMESTAMP,
    updatedAt TIMESTAMP
)

