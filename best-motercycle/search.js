document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const recipes = document.querySelectorAll('.recipe');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();

        recipes.forEach(recipe => {
            const name = recipe.getAttribute('data-name').toLowerCase();
            const image = recipe.querySelector('img');
            const description = recipe.querySelector('.description');

            if (name.includes(searchTerm)) {
                recipe.style.display = 'flex';
                image.classList.remove('hidden');
                description.classList.remove('hidden');
            } else {
                recipe.style.display = 'none';
                image.classList.add('hidden');
                description.classList.add('hidden');
            }
        });
    });
});
