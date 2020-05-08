# Landing Page Project

## Table of Contents

* [Instructions](#instructions)

## About the project

This project is to build a landing page as part of the Udacity FED certificate program.  The major component of this
project are:

   * Dynamically build the main navigation menu as sections are added to the DOM
   * Highlight the section that is in focus as the user scrolls on the page
   * Use a smooth scroll to the appropriate section when a user clicks one of the main navigation links
   
## Approach taken
### Dynamically build navigation

The application starts by querying the existing sections and building the navigation menu.  After that, an 
event listner is kicked off to listen for changes in the DOM.  When a change is made in the DOM, the application
compares the existing structure with the changes in the DOM

### 