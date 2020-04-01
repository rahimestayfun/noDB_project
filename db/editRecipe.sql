UPDATE recipes
SET 
recipe_title=$1,
recipe_img=$2,
ingredients=$3,
directions=$4
WHERE recipe_id = $5
RETURNING *;