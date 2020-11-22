DROP DATABASE IF EXISTS item;
CREATE DATABASE item;

\c item;

CREATE TABLE items (
  itemName VARCHAR,
  price INTEGER,
  category VARCHAR
);

INSERT INTO items (itemName,  price, category)
  VALUES ('AC',  120, 'utility');

INSERT INTO items (itemName,  price, category)
  VALUES ('desk',  60, 'furniture');

INSERT INTO items (itemName,  price, category)
  VALUES ('textbook',  10, 'academic');