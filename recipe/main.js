import recipes from './recipes.mjs';

// Function to generate a random number
function random(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random entry from a list
function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

// Function to create recipe template
function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`;
}

// Function to create tags template
function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

// Function to create rating template
function ratingTemplate(rating) {
    let html = `<span
        class="rating"
        role="img"
        aria-label="Rating: ${rating} out of 5 stars"
    >`;

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }

    html += `</span>`;
    return html;
}

// Function to filter recipes based on search query
function filterRecipes(query) {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(lowerCaseQuery) ||
               recipe.description.toLowerCase().includes(lowerCaseQuery) ||
               recipe.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)) ||
               recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(lowerCaseQuery));
    });

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    return sorted;
}

// Function to render the list of recipes
function renderRecipes(recipeList) {
    const recipeListElement = document.getElementById('recipe-list');
    const recipeHTMLStrings = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    recipeListElement.innerHTML = recipeHTMLStrings;
}

// Search handler function
function searchHandler(e) {
    e.preventDefault();
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredRecipes = filterRecipes(searchInput);
    renderRecipes(filteredRecipes);
}

// Add event listener to search button
document.getElementById('search-button').addEventListener('click', searchHandler);

// Initialize the page with a random recipe
function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

// Initialize the random recipe display
init();
