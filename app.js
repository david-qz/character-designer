// import needed modules

// state
const character = {
    head: 'bird',
    middle: 'dress',
    pants: 'white',
    phrases: []
};

// components

// Designer
const designSection = document.getElementById('design-section');
const [headSelect, middleSelect, pantsSelect] = designSection.querySelectorAll('select');

headSelect.addEventListener('change', () => {
    character.head = headSelect.value;
    displayDesign();
});

middleSelect.addEventListener('change', () => {
    // *** Complete the middle select change handler
});

pantsSelect.addEventListener('change', () => {
    // *** Complete the pants select change handler
});

function displayDesigner() {
    headSelect.value = character.head;
    middleSelect.value = character.middle;
    pantsSelect.value = character.pants;
}

// AddPhrase
const addPhraseSection = document.getElementById('add-phrase-section');
const phraseInput = addPhraseSection.querySelector('input');
// *** Select the button from the add phrase section
// const phraseButton = ?;

function handleAddPhrase() {
    // *** add the current phrase value to the character phrases

    displayPhrases();
    phraseInput.value = '';
    phraseInput.focus();
}

// *** Add a click handler to the phrase button that calls handleAddPhrase

phraseInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleAddPhrase();
    }
});

// Character
const characterSection = document.getElementById('character-section');
const [headImage, middleImage, pantsImage] = characterSection.querySelectorAll('img');

function displayCharacter() {
    headImage.src = 'assets/character/' + character.head + '-head.png';
    middleImage.src = 'assets/character/' + character.middle + '-middle.png';
    pantsImage.src = 'assets/character/' + character.pants + '-pants.png';
}

// Phrases
const phrasesSection = document.getElementById('phrases-section');
const phraseList = phrasesSection.querySelector('ul');

function displayPhrases() {
    phraseList.innerHTML = '';

    for (const phrase of character.phrases) {
        const li = document.createElement('li');
        li.textContent = phrase;
        phraseList.appendChild(li);
    }
}

// page load actions
function displayDesign() {
    displayCharacter();
    displayPhrases();
}

displayDesigner();
displayDesign();
