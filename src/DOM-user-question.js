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

export function displayActivityQuestion() {
        removeDiv('.displayHeightBox');

        const activityBox = document.createElement('form');
        activityBox.classList.add('activityContainer');
        //main Label
        const activityMainLabel = document.createElement('label');
        activityMainLabel.classList.add('activityMainLabel');
        activityMainLabel.setAttribute('for', 'activityQuestion');
        activityMainLabel.textContent = 'Choose your activity level: ';

        //sedentary - 1.2 Multiplier
        const sedentaryContainer = document.createElement('div');
        const sedentaryInput = document.createElement('input');
        sedentaryInput.type = 'radio';
        sedentaryInput.id = 'sedentaryOption';
        sedentaryInput.name = 'activityLevel';
        sedentaryInput.value = 'sedentary';
        const sedentaryLabel = document.createElement('label');
        sedentaryLabel.for = 'sedentaryOption';
        sedentaryLabel.textContent = 'Sedentary (Little or no exercise)';
        sedentaryContainer.appendChild(sedentaryInput);
        sedentaryContainer.appendChild(sedentaryLabel);

        //lightly active - 1.375 Multiplier
        const lightlyActiveContainer = document.createElement('div');
        const lightlyActiveInput = document.createElement('input');
        lightlyActiveInput.type = 'radio';
        lightlyActiveInput.id = 'lightlyActiveOption';
        lightlyActiveInput.name = 'activityLevel';
        lightlyActiveInput.value = 'lightlyActive';
        const lightlyActiveLabel = document.createElement('label');
        lightlyActiveLabel.for = 'lightlyActiveOption';
        lightlyActiveLabel.textContent = 'Lightly Active (light exercise 1-3 days a week)';
        lightlyActiveContainer.appendChild(lightlyActiveInput);
        lightlyActiveContainer.appendChild(lightlyActiveLabel);

        //Moderately Active - 1.55 Multiplier
        const moderatelyActiveContainer = document.createElement('div');
        const moderatelyActiveInput = document.createElement('input');
        moderatelyActiveInput.type = 'radio';
        moderatelyActiveInput.id = 'moderatelyActiveOption';
        moderatelyActiveInput.name = 'activityLevel';
        moderatelyActiveInput.value = 'moderatelyActive';
        const moderatelyActiveLabel = document.createElement('label');
        moderatelyActiveLabel.for = 'moderatelyActiveOption';
        moderatelyActiveLabel.textContent = 'Moderately Active (moderate exercise 3-5 days a week)';
        moderatelyActiveContainer.appendChild(moderatelyActiveInput);
        moderatelyActiveContainer.appendChild(moderatelyActiveLabel);

        //Very Active - 1.725 multiplier
        const veryActiveContainer = document.createElement('div');
        const veryActiveInput = document.createElement('input');
        veryActiveInput.type = 'radio';
        veryActiveInput.id = 'veryActiveOption';
        veryActiveInput.name = 'activityLevel';
        veryActiveInput.value = 'veryActive';
        const veryActiveLabel = document.createElement('label');
        veryActiveLabel.for = 'veryActiveOption';
        veryActiveLabel.textContent = 'Very Active (Hard exercise 6-7 days a week)';
        veryActiveContainer.appendChild(veryActiveInput);
        veryActiveContainer.appendChild(veryActiveLabel);

        //Extra active - 1.9 Multiplier
        const extraActiveContainer = document.createElement('div');
        const extraActiveInput = document.createElement('input');
        extraActiveInput.type = 'radio';
        extraActiveInput.id = 'extraActiveOption';
        extraActiveInput.name = 'activityLevel';
        extraActiveInput.value = 'extraActive';
        const extraActiveLabel = document.createElement('label');
        extraActiveLabel.for = 'extraActiveOption';
        extraActiveLabel.textContent = 'Extra Active (very hard exercise, physicial job or training twice a day)';
        extraActiveContainer.appendChild(extraActiveInput);
        extraActiveContainer.appendChild(extraActiveLabel);

        //Submit button
        const submitButton = document.createElement('button');
        submitButton.classList.add('activitySubmitButton');
        submitButton.textContent = 'Submit';



        activityBox.appendChild(activityMainLabel);
        activityBox.appendChild(sedentaryContainer);
        activityBox.appendChild(lightlyActiveContainer);
        activityBox.appendChild(moderatelyActiveContainer);
        activityBox.appendChild(veryActiveContainer);
        activityBox.appendChild(extraActiveContainer);
        activityBox.appendChild(submitButton);

        body.appendChild(activityBox);
}


