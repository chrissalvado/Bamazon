create database bamazon_db
use bamazon_db;

create table products(
item_id integer(100) not null,
product_name varchar(100) null,
department_name varchar(100) null,
price decimal(10,4) null,
stock_quantity integer(100) null,
primary key (item_id)
);

insert into products(item_id, product_name, depratment_name, price, stock_quantity)
values (1,"bike" , "sports" , 150.50, 3);

insert into products(item_id, product_name, depratment_name, price, stock_quantity)
values (2, "pearl jam poster", "art", 82.88, 1);

insert into products(item_id, product_name, depratment_name, price, stock_quantity)
values (3, "guitar", "music", 425.00, 12);

insert into products(item_id, product_name, depratment_name, price, stock_quantity)
values (4, " samsung 82inch tv", "electronics", 1238.55, 155);

insert into products(item_id, product_name, depratment_name, price, stock_quantity)
values (5, "warren moon signed jersey", "memorabilia", 250.00, 3);

insert into products(item_id, product_name, depratment_name, price, stock_quantity)
values (6, "porsche 911 carrera", "auto", 135000.00, 1);

insert into products(item_id, product_name, depratment_name, price, stock_quantity)
values (7, "wilson baseball mit", "sports", 82.00 , 155);

insert into products(item_id, product_name, depratment_name, price, stock_quantity)
values (8, "american girl doll", "kids", 128.00, 19);

insert into products(item_id, product_name, depratment_name, price, stock_quantity)
values (9, "caphalon pot set", "kitchen", 255.00, 194);

insert into products(item_id, product_name, depratment_name, price, stock_quantity)
values (10, "egyptian cotton sheet set", "bedroom", 1358.55, 202);

