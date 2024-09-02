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


