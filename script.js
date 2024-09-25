const button = document.getElementById('calculateButton');

function calculateBMI(){
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if(weight > 0 && height > 0) {
        const bmi = weight / ((height * height) / 10000);
        document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)}`;

        const alrt = document.createElement('h2');
        const result = document.querySelector('#result');
        if(bmi < 18.6){
            alrt.innerHTML = 'You are Under Weight !!';
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            alrt.innerHTML = 'You are Normal !!';
        }
        else{
            alrt.innerHTML = 'You are Over Weight';
        }
        result.append(alrt);
    }
    else {
        document.getElementById('result').textContent = 'Please Enter Valid Weight and Height';
    }
}
