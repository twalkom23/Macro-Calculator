import _ from 'lodash';
import './style.css';

import { displayMaleOrFemale } from "./DOM-user-question";
import { maleOrFemaleSelection } from "./logic-user-questions";


export const information = {
    maleOrFemale: ''
};


function runProgram () {
    displayMaleOrFemale();
    maleOrFemaleSelection();
}

runProgram();