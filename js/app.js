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

let focusSection = document.getElementById('section1');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// get existing links from menu items
function getMenuLinks(menuItems) {
    let menuLink = [];
    for (const menuItem of menuItems) {
        menuLink.push(menuItem.id);
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
    // console.log(observer);

}

function listenForScroll() {
    document.addEventListener('scroll', function () {
        setTimeout(sectionPositions, 300);
    })
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

function sectionPositions() {
    let allSections = document.getElementsByTagName('section');
    let activeSection = document.getElementsByClassName('your-active-class')[0];
    // let activeSection = document.getElementById('section2');
    let activeTop = activeSection.getBoundingClientRect()['top'];
    let activeBottom = activeSection.getBoundingClientRect()['bottom'];
    let activeSum = activeTop + activeBottom;


    for (const section of allSections) {
        let top = section.getBoundingClientRect()['top'];
        let bottom = section.getBoundingClientRect()['bottom'];
        let sum = top + bottom;
        if (activeSum < 0 || sum < activeSum)
        if (sum > 0) {
            console.log(top + bottom);
            activeSection.removeAttribute('class');
            activeSection = section;
            activeSum = sum;
            activeSection.setAttribute('class', 'your-active-class');
        }
    }
    console.log(activeSection);

}

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
listenForScroll();

