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


// build the nav
function buildNavigationList() {
    let sections = document.querySelectorAll('section');
    const navUl = document.getElementById('navbar__list');

    for (const section of sections) {
        const navItem = document.createElement('li');
        const link = document.createElement('a');
        link.setAttribute('href', `#${section.id}`);
        console.log(link);
        link.textContent = section.dataset.nav;
        navItem.appendChild(link);
        navUl.appendChild(navItem);
    }
}

function listenForDOMChanges() {
    const bodyNode = document.getElementsByTagName('main')[0];
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer){
        console.log('here');
        buildNavigationList();
    };
    const observer = new MutationObserver(callback);
    observer.observe(bodyNode, config);

}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

listenForDOMChanges();
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


