INSERT INTO houses (name, address, city, zipcode, image_url, monthly_rent, monthly_mortgage)
VALUES ($1, $2, $3, $4, $5, $6, $7);

SELECT * FROM houses;