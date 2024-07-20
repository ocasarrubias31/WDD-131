document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const recipesContainer = document.getElementById('recipes');

    searchButton.addEventListener('click', (event) => {
        event.preventDefault();
        filterRecipes(searchInput.value);
    });

    function filterRecipes(query) {
        const recipes = recipesContainer.querySelectorAll('.recipe');
        recipes.forEach(recipe => {
            const name = recipe.dataset.name.toLowerCase();
            if (name.includes(query.toLowerCase())) {
                recipe.style.display = 'flex';
            } else {
                recipe.style.display = 'none';
            }
        });
    }
});
