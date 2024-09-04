import _ from 'lodash';
import './style.css';

import { displayMaleOrFemale } from "./DOM-user-question";
import { maleOrFemaleSelection, ageSelection } from "./logic-user-questions";


export const information = {
    maleOrFemale: '',
    age: '',
    weight: '',
    height: '',
    exerciseLevel: '',
    job: '',
    goal: '',
    goalWeight: '',
    time: ''
};


function runProgram () {
    displayMaleOrFemale();
    maleOrFemaleSelection();
    ageSelection();
}

runProgram();

document.addEventListener('DOMContentLoaded', () => {

const practiceButton = document.querySelector('.practiceButton');
practiceButton.addEventListener('click', () => {
    console.log(information);


})
})

