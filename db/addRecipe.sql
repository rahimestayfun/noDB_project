INSERT INTO  recipes
(recipe_title,recipe_img,ingredients,directions)
VALUES
($1,$2,$3,$4)
RETURNING *;