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
