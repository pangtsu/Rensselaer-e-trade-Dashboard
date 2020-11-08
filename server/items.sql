DROP DATABASE IF EXISTS item;
CREATE DATABASE item;

\c item;

CREATE TABLE items (
  ID SERIAL PRIMARY KEY,
  itemName VARCHAR,
  price INTEGER,
  category VARCHAR
);

INSERT INTO items (ID, itemName,  price, category)
  VALUES (1, 'AC',  120, 'utility');

INSERT INTO items (ID, itemName,  price, category)
  VALUES (2, 'desk',  60, 'furniture');

INSERT INTO items (ID, itemName,  price, category)
  VALUES (3, 'textbook',  10, 'academic');