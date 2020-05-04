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

// get existing links from menu items
function getMenuLinks(menuItems) {
    let menuLink = [];
    for (const menuItem of menuItems) {
        menuLink.push(menuItem.querySelector('a').getAttribute('href'))
    }
    return menuLink;
}

function listenForDOMChanges() {
    const bodyNode = document.getElementsByTagName('main')[0];
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer){
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

// build the nav
function buildNavigationList() {
    let sections = document.querySelectorAll('section');
    const navUl = document.getElementById('navbar__list');
    const menuItems = navUl.querySelectorAll('li');
    menuLinks = getMenuLinks(menuItems);
    for (const section of sections) {
        if (!menuLinks.includes(`#${section.id}`)) {
            const navItem = document.createElement('li');
            navItem.setAttribute('id', `#${section.id}`);
            navItem.setAttribute('class', 'navbar__menu');
            navItem.addEventListener("click", scrollToSection);
            navItem.textContent = section.dataset.nav;
            navUl.setAttribute('class', "navbar__menu menu__link");
            navUl.appendChild(navItem);
        }
    }
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
function scrollToSection(event) {
    console.log(event.target);
    const destinationSection = document.querySelector(event.target.id);
    console.log(destinationSection);
    destinationSection.scrollIntoView({behavior: "smooth"});
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
buildNavigationList();
listenForDOMChanges();

// Scroll to section on link click

// Set sections as active


