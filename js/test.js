

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
    paragraph.textContent = "The quick brown fox jumps over the lazy dog";
    return paragraph;
}

function createNewDiv(header) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('landing__container)');
    newDiv.appendChild(createNewHeader(header));
    newDiv.appendChild(createNewParagraph());
    return newDiv;
}