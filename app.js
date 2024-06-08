
const bmiCalculator = () => {
  let bmiResult = document.getElementById('bmi')
  let height = document.getElementById("height");
  let heightValue = height.value;
  let weight = document.getElementById("weight");
  let weightValue = weight.value;
  if(document.getElementById('height').value==='' && document.getElementById('weight').value===''){
    alert('Input Your Height And Weight')
    return;
  }
  else if(document.getElementById('height').value===''){
    alert('Input Your Height')
    return;
  }
  else if(document.getElementById('weight').value===''){
    alert('Input Your Weight')
    return;
  }
  document.getElementById('height').value='';
  document.getElementById('weight').value=''
  // Formula BMI = kg / m*m
  let meter = heightValue * 0.3048;
  let squareMeter = meter * meter;
  let bmiCal = (weightValue / squareMeter).toFixed(2);
  bmiResult.innerHTML = 'Your BMI is : '+ bmiCal;
  if(bmiCal<18){
    document.getElementById('category').innerHTML = 'You are Underweight';
  }
  else if(bmiCal>=18 && bmiCal<24){
    document.getElementById('category').innerHTML = 'You are Normal Weight';
  }
  else if(bmiCal>=24 && bmiCal<30){
    document.getElementById('category').innerHTML = 'You are Over Weight';
  }
  else{
    document.getElementById('category').innerHTML = 'You are  Obese';
  }

}
const reload = () =>{
  document.getElementById("height").value='';
  document.getElementById("weight").value='';
  document.getElementById('category').innerHTML ='';
  document.getElementById('bmi').innerHTML = '';
}


