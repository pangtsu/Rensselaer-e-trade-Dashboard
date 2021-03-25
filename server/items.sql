DROP DATABASE IF EXISTS item;
CREATE DATABASE item;

\c item;

CREATE TABLE items (
  itemName VARCHAR,
  price INTEGER,
  category VARCHAR,
  descriptions VARCHAR,
  imageIDs INTEGER[]
  );

INSERT INTO items (itemName,  price, category, descriptions)
  VALUES ('AC',  120, 'utility', 'Portable AC for sale');

INSERT INTO items (itemName,  price, category, descriptions)
  VALUES ('desk',  60, 'furniture', 'Laminated woods');

INSERT INTO items (itemName,  price, category, descriptions)
  VALUES ('textbook',  10, 'academic', 'Positive Psychology');