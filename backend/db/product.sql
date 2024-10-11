CREATE TABLE product (
  ID SERIAL PRIMARY KEY,
  product_type VARCHAR(50),
  product_name VARCHAR(50),
  rating Integer,
  comment VARCHAR(50)
);

INSERT INTO product (product_type, product_name, rating, comment)
  VALUES ('Bedroom', 'Bedframe',4,'Good',);
  