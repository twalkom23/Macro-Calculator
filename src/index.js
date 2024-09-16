import _ from 'lodash';
import './style.css';

import { displayMaleOrFemale} from "./DOM-user-question";
import { maleOrFemaleSelection, ageSelection, heightSelection, activitySelection } from "./logic-user-questions";


export const information = {
    maleOrFemale: '',
    age: '',
    weight: '',
    height: '',
    exerciseLevel: '',
    goal: '',
    goalWeight: '',
    time: ''
};


function runProgram () {
    displayMaleOrFemale();
    maleOrFemaleSelection();
    ageSelection();
    heightSelection();
    activitySelection();
}

runProgram();

document.addEventListener('DOMContentLoaded', () => {

const practiceButton = document.querySelector('.practiceButton');
practiceButton.addEventListener('click', () => {
    console.log(information);


})
})

