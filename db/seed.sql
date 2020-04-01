CREATE TABLE recipes(
recipe_id SERIAL PRIMARY KEY,
recipe_title VARCHAR(200),
recipe_img VARCHAR(500),
ingredients VARCHAR(3000),
directions VARCHAR(3000)
);




insert into recipes
(recipe_title,recipe_img,ingredients,directions)
values(
'muffin','https://images.media-allrecipes.com/userphotos/720x405/7212902.jpg','2 cups all-purpose flour,3 teaspoons baking powder, 1/2 teaspoon salt, 3/4 cup white sugar,1 egg','Preheat oven to 400 degrees F (205 degrees C).Stir together the flour, baking powder, salt and sugar in a large bowl.In a small bowl beat egg with a fork. Stir in milk and oil.Pour all at once into the well in the flour mixture.Mix quickly and lightly with a fork until moistened, but do not beat.Pour the batter into paper lined muffin pan cups.You can add 1 cup fresh blueberries or 1 cup finely chopped raisins.Bake for 25 minutes, or until golden.');


insert into recipes
(recipe_title,recipe_img,ingredients,directions)
values(
'parmesan risotto','https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/24/2/BX0605H_easy-parmesan-risotto_s4x3.jpg.rend.hgtvcom.826.620.suffix/1406090695131.jpeg','1/2 cups rice,5 cups simmering chicken stock,1 cup freshly grated Parmesan cheese,1/2 cup dry white wine,3 tablespoons unsalted butter,2 teaspoons kosher salt,1 teaspoon freshly ground black pepper,1 cup frozen peas','Preheat the oven to 350 degrees.Place the rice and 4 cups of chicken stock in a oven. Cover and bake for 45 minutes, until most of the liquid is absorbed and the rice is al dante.Remove from the oven, add the remaining cup of chicken stock, the Parmesan, wine, butter, salt, and pepper. Stir vigorously for 2 to 3 minutes, until the rice is thick and creamy.Add the peas and stir until heated through. Serve hot.');
