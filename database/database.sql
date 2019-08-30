CREATE DATABASE bd_inventario;

USE bd_inventario;

CREATE TABLE users (
    id_user INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nick_user VARCHAR(50),
    name_user VARCHAR(100),
    email_user VARCHAR(200),
    password_user VARCHAR(100)
)

CREATE TABLE games (
    id INT(5) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_cliente int(5) NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES cliente(id_user)
);