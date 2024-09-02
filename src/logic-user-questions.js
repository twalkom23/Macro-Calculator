//This will be the file that contains all the user questions to be used on the page
import { information } from ".";
//below I will have all the logic for each of the questions. All in seperate functions to keep them seperate
export function maleOrFemaleSelection() {
    const buttonContainer = document.querySelector('.mOrFButtonHolder');

    buttonContainer.addEventListener('click',(event) => {
        const buttonSelection = event.target.classList.value;
        if (buttonSelection === 'maleButton') {
            information.maleOrFemale = 'male';
        } else {
            information.maleOrFemale = 'female';
        }
    
    })

    


}