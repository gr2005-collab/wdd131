const recipes = [
    {
      name: "Fufu and Okra Soup",
      ingredients: [
        "2 cups cassava flour (or fufu flour)",
        "3 cups water",
        "1/2 lb okra, chopped",
        "1/2 lb meat or fish (optional)",
        "1 onion, diced",
        "1 bouillon cube",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Boil okra in water until soft. Add diced onion and seasonings.",
        "Add meat or fish if using and cook until done.",
        "For fufu, boil 2 cups water, stir in cassava flour slowly, mix well.",
        "Stir continuously over low heat until smooth and stretchy."
      ]
    },
    {
      name: "Cassava Leaf",
      ingredients: [
        "1 lb cassava leaves (frozen or fresh, finely chopped)",
        "1/2 cup peanut butter",
        "1 onion, diced",
        "1 bouillon cube",
        "1/2 lb meat or fish",
        "1-2 cups water"
      ],
      instructions: [
        "In a pot, boil cassava leaves with water.",
        "Add meat/fish and cook until tender.",
        "Stir in peanut butter, onion, and seasonings.",
        "Simmer on low until oil rises to top and leaves are soft."
      ]
    },
    {
      name: "Sierra Leone Acheke",
      ingredients: [
        "2 cups acheke (cassava couscous)",
        "1 tomato, sliced",
        "1 onion, sliced",
        "1 can sardines (optional)",
        "2 tbsp oil",
        "Salt to taste"
      ],
      instructions: [
        "Steam acheke over hot water or microwave with a bit of water.",
        "Mix acheke with oil and salt.",
        "Top with sliced tomato, onion, and sardines if desired."
      ]
    },
    {
      name: "Potato Leaves",
      ingredients: [
        "1 lb potato leaves (finely chopped)",
        "1/2 cup palm oil",
        "1 onion, diced",
        "1 bouillon cube",
        "1/2 lb meat or fish",
        "1/2 tsp ground pepper"
      ],
      instructions: [
        "Boil meat/fish with salt and seasoning until done.",
        "Add chopped leaves and stir in palm oil and onion.",
        "Simmer on low until leaves are cooked and flavors blend."
      ]
    },
    {
      name: "Groundnut Soup",
      ingredients: [
        "1 cup peanut butter",
        "1 onion, diced",
        "1/2 lb meat or fish",
        "1 bouillon cube",
        "2 cups water",
        "Salt and pepper"
      ],
      instructions: [
        "Boil meat/fish with onion and seasoning.",
        "Mix peanut butter with warm water until smooth.",
        "Add mixture to pot and simmer until thick and tasty."
      ]
    }
  ];
  
  function displayRecipes() {
    const container = document.getElementById("recipe-container");
    recipes.forEach(recipe => {
      const section = document.createElement("section");
      section.classList.add("recipe");
  
      section.innerHTML = `
        <h2>${recipe.name}</h2>
        <h3>Ingredients:</h3>
        <ul>
          ${recipe.ingredients.map(item => `<li>${item}</li>`).join("")}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          ${recipe.instructions.map(step => `<li>${step}</li>`).join("")}
        </ol>
      `;
  
      container.appendChild(section);
    });
  }
  
  document.addEventListener("DOMContentLoaded", displayRecipes);
  