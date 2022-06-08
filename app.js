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
    character.middle = middleSelect.value;
    displayDesign();
});

pantsSelect.addEventListener('change', () => {
    character.pants = pantsSelect.value;
    displayDesign();
});

function displayDesigner() {
    headSelect.value = character.head;
    middleSelect.value = character.middle;
    pantsSelect.value = character.pants;
}

// AddPhrase
const addPhraseSection = document.getElementById('add-phrase-section');
const phraseInput = addPhraseSection.querySelector('input');
const phraseButton = addPhraseSection.querySelector('button');

function handleAddPhrase() {
    const phrase = phraseInput.value.trim();
    if (phrase) {
        character.phrases.push(phrase);
    }

    displayPhrases();
    phraseInput.value = '';
    phraseInput.focus();
}

phraseButton.addEventListener('click', () => {
    handleAddPhrase();
});

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
