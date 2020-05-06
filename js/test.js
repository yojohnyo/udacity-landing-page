

function addNewSection(title) {
    const newSection = document.createElement('section');
    newSection.setAttribute('id', title);
    newSection.setAttribute('data-nav', title);
    newSection.appendChild(createNewDiv(title));
    const mainContainer = document.querySelector('main');
    mainContainer.appendChild(newSection);
}

function createNewHeader(headerTitle) {
    const header = document.createElement('h2');
    header.textContent = headerTitle;
    return header;
}

function createNewParagraph() {
    const paragraph = document.createElement('p');
    paragraph.textContent = "The quick brown fox jumps over the lazy dog porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.\n" +
        "\n" +
        "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
    return paragraph;
}

function createNewDiv(header) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('landing__container)');
    newDiv.appendChild(createNewHeader(header));
    newDiv.appendChild(createNewParagraph());
    return newDiv;
}


// Select the node that will be observed for mutations
// const targetNode = document.getElementsByTagName('body')[0];
//
// // Options for the observer (which mutations to observe)
// const config = { attributes: true, childList: true, subtree: true };
//
// // Callback function to execute when mutations are observed
// const callback = function(mutationsList, observer) {
//     // Use traditional 'for loops' for IE 11
//     for(let mutation of mutationsList) {
//         if (mutation.type === 'childList') {
//             console.log('A child node has been added or removed.');
//         }
//         else if (mutation.type === 'attributes') {
//             console.log('The ' + mutation.attributeName + ' attribute was modified.');
//         }
//     }
// };
//
// // Create an observer instance linked to the callback function
// const observer = new MutationObserver(callback);
//
// // Start observing the target node for configured mutations
// observer.observe(targetNode, config);

// Later, you can stop observing
// observer.disconnect();