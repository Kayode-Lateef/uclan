// Select the element with the class 'hamburger-menu' and add a click event listener to it
document.querySelector('.hamburger-menu').addEventListener('click', function() {
    // When the hamburger menu is clicked, toggle the 'display' class on the element with the class 'nav-menu'
    // This will show or hide the navigation menu
    document.querySelector('.nav-menu').classList.toggle('display');
});
