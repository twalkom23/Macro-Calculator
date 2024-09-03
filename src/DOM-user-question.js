//This will control all of the DOM manipulation for the questions
const body = document.querySelector('body');

export function displayMaleOrFemale () {
        const buttonHolder = document.createElement('div');
        buttonHolder.classList.add('mOrFButtonHolder');
        body.appendChild(buttonHolder);

        //create the male button
        const maleButton = document.createElement('button');
        maleButton.classList.add('maleButton');
        maleButton.textContent = '🚹 Male';
        buttonHolder.appendChild(maleButton);

        //create the female button
        const femaleButton = document.createElement('button');
        femaleButton.classList.add('femaleButton');
        femaleButton.textContent = '🚺 Female';
        buttonHolder.append(femaleButton);
}

export function displayAgeQuestion () { //This will both remove the male female Q and add the age Q
        //Removing the current buttons
        const maleOrFemaleButtons = document.querySelector('.mOrFButtonHolder');
        maleOrFemaleButtons.remove();


}


