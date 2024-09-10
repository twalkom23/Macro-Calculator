import { waitForElement } from "./other";

//This will be the file that contains all the user questions to be used on the page
import { information } from ".";
import { displayAgeQuestion, displayHeightQuestion } from "./DOM-user-question";
//below I will have all the logic for each of the questions. All in seperate functions to keep them seperate
export function maleOrFemaleSelection() {
    const buttonContainer = document.querySelector('.mOrFButtonHolder');

    buttonContainer.addEventListener('click',(event) => {
        const buttonSelection = event.target.classList.value;
        if (buttonSelection === 'maleButton') {
            information.maleOrFemale = 'male';
            displayAgeQuestion();
        } else if (buttonSelection === 'femaleButton') {
            information.maleOrFemale = 'female';
            displayAgeQuestion();
        }
    })
}
//will hold the logic for when the age is chosen
export async function ageSelection () {
        const button = await waitForElement('.sliderAgeButton'); //rest of function wont run until enter button is in the DOM
        const ageValue = document.getElementById('ageSlider');
        
        button.addEventListener('click', () => {
            information.age = ageValue.value;
            displayHeightQuestion();
        })

}

export async function heightSelection () {
    const button = await waitForElement('.sliderHeightButton');
    const heightValue = document.getElementById('heightSlider');

    button.addEventListener('click', () => {
        information.height = heightValue.value;
    })
}

