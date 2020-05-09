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

const timeOut = 300;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// get existing links from menu items
function getMenuLinks(menuItems) {
    let menuLink = [];
    for (const menuItem of menuItems) {
        menuLink.push(menuItem.dataset.dest);
    }
    return menuLink;
}

//Event listener to listen for changes to the DOM to update the menu
function listenForDOMChanges() {
    const bodyNode = document.getElementsByTagName('main')[0];
    const config = { attributes: true, childList: true, subtree: true };
    const callback = function(mutationsList, observer){
        buildNavigationList();
    };
    const observer = new MutationObserver(callback);
    observer.observe(bodyNode, config);
}

// Sets up event listener scrolling with a timeout of the global variable 'timeOut'
function listenForScroll() {
    document.addEventListener('scroll', function () {
        setTimeout(sectionPositions, timeOut);
    })
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the navigation menu and add click event listener to the links
function buildNavigationList() {
    const fragment = document.createDocumentFragment();
    let sections = document.querySelectorAll('section');
    const navUl = document.getElementById('navbar__list');
    const menuItems = navUl.querySelectorAll('li');
    menuLinks = getMenuLinks(menuItems);
    for (const section of sections) {
        if (!menuLinks.includes(section.id)) {
            const navItem = document.createElement('li');
            const link = document.createElement('a');
            link.setAttribute('href', `#${section.id}`);
            link.textContent = section.dataset.nav;
            navItem.appendChild(link);
            navItem.setAttribute('data-dest', section.id);
            navItem.setAttribute('class', 'navbar__menu');
            link.addEventListener("click", scrollToSection);
            fragment.appendChild(navItem);
        }
    }
    navUl.setAttribute('class', "navbar__menu menu__link");
    navUl.appendChild(fragment);
}


// Add class 'active' to section when near top of viewport

function sectionPositions() {
    let allSections = document.getElementsByTagName('section');
    let activeSection = document.getElementsByClassName('your-active-class')[0];
    let activeTop = activeSection.getBoundingClientRect()['top'];
    let activeBottom = activeSection.getBoundingClientRect()['bottom'];
    let activeSum = activeTop + activeBottom;

    for (const section of allSections) {
        let top = section.getBoundingClientRect()['top'];
        let bottom = section.getBoundingClientRect()['bottom'];
        let sum = top + bottom;
        if (activeSum < 0 || sum < activeSum)
        if (sum > 0) {
            activeSection.removeAttribute('class');
            activeSection = section;
            activeSum = sum;
            activeSection.setAttribute('class', 'your-active-class');
        }
    }
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(event) {
    const parent = event.target.parentElement;
    const destinationSection = document.getElementById(parent.dataset.dest);
    event.preventDefault(event);
    destinationSection.scrollIntoView({behavior: "smooth"});
    return true;
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
listenForScroll();

