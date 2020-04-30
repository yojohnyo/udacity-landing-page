/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let sections = document.querySelectorAll('section');
console.log(sections);
const navUl = document.getElementById('navbar__list');

for (const section of sections) {
    const navItem = document.createElement('li');
    const link = document.createElement('a');
    link.setAttribute('href', `#${section.id}`);
    link.textContent = section.dataset.nav;
    navItem.appendChild(link);
    navUl.appendChild(navItem);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu


// Scroll to section on link click

// Set sections as active


