//Calculate BMI

function calculateBMI() {
    
    const target =  document.getElementById('BMIresult');

    const unitWeight = document.getElementById('lb').checked
    const unitHeight = document.getElementById('in').checked

    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    
    //Check that numbers have been input
    if (isNaN(height) === true || isNaN(weight) === true) {
            return
        }
    
    //Check unit of weight
    if (unitWeight === true) {
        weight = weight * 0.453592;
    }

    //Check unit of height
    if (unitHeight === true) {
        height = height * 2.54;
    }

    // Calculate BMI to 4 significant figures
    const bmi = ((weight / Math.pow(height, 2))*10000).toPrecision(4);

    target.innerHTML = bmi;

}

//Switch images using background image

const wrapper = document.querySelector('.wrapper');


wrapper.addEventListener('click', function() {

    if (wrapper.style.backgroundImage === 'var(--bg-1)') {
        
        wrapper.style.backgroundImage = 'var(--bg-2)';
    } 
    else {
        wrapper.style.backgroundImage = 'var(--bg-1)';
    }

})

const form = document.getElementById('bmiCalculator');


//Prevent clicking on parent

form.addEventListener('click', function(event){
    
    event.stopPropagation();

})



