import _ from 'lodash';
import './style.css';

import { displayMaleOrFemale } from "./DOM-user-question";
import { maleOrFemaleSelection } from "./logic-user-questions";


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
}

runProgram();

document.addEventListener('DOMContentLoaded', () => {

const practiceButton = document.querySelector('.practiceButton');
practiceButton.addEventListener('click', () => {
    


})
})