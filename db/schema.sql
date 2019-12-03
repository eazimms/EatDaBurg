DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;

use burger_db; 

CREATE TABLE burgers (
id int auto_increment not null, 
burger_name varchar(30) not null, 
devoured boolean DEFAULT false, 
primary key (id)
); 