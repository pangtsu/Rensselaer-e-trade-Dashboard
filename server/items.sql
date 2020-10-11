DROP DATABASE IF EXISTS item;
CREATE DATABASE item;

\c users;

CREATE TABLE items (
  ID SERIAL PRIMARY KEY,
  itemName VARCHAR,
  user VARCHAR,
  price INTEGER,
  category VARCHAR
);

INSERT INTO items (itemName, user, price, category)
  VALUES ('AC', 'monicaat', 120, 'utility');