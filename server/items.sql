DROP DATABASE IF EXISTS item;
CREATE DATABASE item;

\c item;

CREATE TABLE items (
  ID SERIAL PRIMARY KEY,
  itemName VARCHAR,
  price INTEGER,
  category VARCHAR
);

INSERT INTO items (itemName,  price, category)
  VALUES ('AC',  120, 'utility');