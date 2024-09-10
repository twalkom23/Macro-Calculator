import { removeDiv } from "./other";

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
        removeDiv('.mOrFButtonHolder');
        
        //Adding the age question
        const sliderBox = document.createElement('div');
        sliderBox.classList.add('ageSliderBox');

        const sliderLabel = document.createElement('label');
        sliderLabel.setAttribute('for', 'ageSlider');
        sliderLabel.textContent = 'Select your age: ';

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.id = 'ageSlider';
        slider.name = 'age';
        slider.min = 16;
        slider.max = 99;
        slider.value = 30;

        const sliderDisplay = document.createElement('p');
        sliderDisplay.id = 'ageValue';
        sliderDisplay.textContent = slider.value;

        const sliderButton = document.createElement('button');
        sliderButton.classList.add('sliderAgeButton');
        sliderButton.textContent = 'Enter';
       
        const sliderOutPutButtonHolder = document.createElement('div');
        sliderOutPutButtonHolder.classList.add('sliderButtonContainer');

        sliderOutPutButtonHolder.appendChild(slider);
        sliderOutPutButtonHolder.appendChild(sliderDisplay);
        sliderOutPutButtonHolder.appendChild(sliderButton);
        sliderBox.appendChild(sliderLabel);
        sliderBox.appendChild(sliderOutPutButtonHolder);
        body.appendChild(sliderBox);

        slider.addEventListener('input', function() {
                sliderDisplay.textContent = slider.value;
        })

}

export function displayHeightQuestion() {//Will remove the age dom and add the height dom
        removeDiv('.ageSliderBox');


        const sliderBox = document.createElement('div');
        sliderBox.classList.add('displayHeightBox');

        const sliderLabel = document.createElement('label');
        sliderLabel.setAttribute('for', 'heightSlider');
        sliderLabel.textContent = 'Select your height: ';

        const slider = document.createElement('input');
        slider.type = 'range';
        slider.id = 'heightSlider';
        slider.name = 'height';
        slider.min = 100;
        slider.max = 240;
        slider.value = 170;

        const sliderDisplay = document.createElement('p');
        sliderDisplay.id = 'heightValue';
        sliderDisplay.textContent = slider.value + ' cm';

        const sliderButton = document.createElement('button');
        sliderButton.classList.add('sliderHeightButton');
        sliderButton.textContent = 'Enter';
       
        const sliderOutPutButtonHolder = document.createElement('div');
        sliderOutPutButtonHolder.classList.add('sliderHeightButtonContainer');

        sliderOutPutButtonHolder.appendChild(slider);
        sliderOutPutButtonHolder.appendChild(sliderDisplay);
        sliderOutPutButtonHolder.appendChild(sliderButton);
        sliderBox.appendChild(sliderLabel);
        sliderBox.appendChild(sliderOutPutButtonHolder);
        body.appendChild(sliderBox);

        slider.addEventListener('input', function() {
                sliderDisplay.textContent = slider.value + ' cm';
        })

}


