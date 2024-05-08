const themeSelector = document.getElementById('themeSelector');
const logo = document.getElementById('logo');

themeSelector.addEventListener('change', changeTheme);

function changeTheme(event) {
    const selectedTheme = event.target.value;
    const body = document.body;

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo_blue.webp';
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}
