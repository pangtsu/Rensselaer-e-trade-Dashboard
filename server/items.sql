DROP DATABASE IF EXISTS item;
CREATE DATABASE item;

\c item;

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  itemName VARCHAR NOT NULL,
  price INTEGER,
  category VARCHAR,
  descriptions VARCHAR,
  imageIDs INTEGER[],
  created_at TIMESTAMP NOT NULL DEFAULT NOW()
  );
