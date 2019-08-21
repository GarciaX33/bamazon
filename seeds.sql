CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products
(
  id INT NOT NULL
  AUTO_INCREMENT,
  product VARCHAR
  (45) NULL,
  department VARCHAR
  (50)NULL,
  price DECIMAL
  (10,2) NULL,
  stockQuantity INT NULL,
  PRIMARY KEY
  (id)
);

  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("apple", "fruit", 1, 30);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("banana", "fruit", 1.50, 30);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("watermelon", "fruit", 3, 30);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("pear", "fruit", 2, 30);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("kiwi", "fruit", 2, 30);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("cabbage", "vegetable", 3, 30);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("lettuce", "vegetable", 3, 30);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("potato", "vegetable", 2, 30);
  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("water", "beverage", 1, 30);

  INSERT INTO products
    (product, department,price, stockQuantity)
  VALUES
    ("orange juice", "beverage", 3, 30);