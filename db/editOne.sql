UPDATE houses SET
name = $2, 
city = $3,
state = $4,
zipcode = $5,
image_url = $6,
monthly_rent = $7,
monthly_mortgage = $8
WHERE id = $1;