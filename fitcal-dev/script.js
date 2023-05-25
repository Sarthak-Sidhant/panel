function calculate() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;
    var age = document.getElementById("age").value;
    var activity = document.getElementById("activity").value;
  
    // Calculate BMI
    var bmi = weight / (height * height);
  
    // Calculate BMR
    var bmr = 10 * weight + 6.25 * height - 5 * age;
  
    // Calculate TDEE
    var tdee = bmr * activity;
  
    // Calculate calories needed to lose weight
    var caloriesToLose = tdee - 500;
  
    // Calculate calories needed to gain weight
    var caloriesToGain = tdee + 500;
  
    // Display results
    document.getElementById("result").innerHTML =
      "Your BMI is " + bmi.toFixed(2) +
      "<br />Your BMR is " + bmr.toFixed(2) +
      "<br />Your TDEE is " + tdee.toFixed(2) +
      "<br />You need " + caloriesToLose.toFixed(2) + " calories to lose weight" +
      "<br />You need " + caloriesToGain.toFixed(2) + " calories to gain weight";
  }
  
  document.getElementById("calculate-btn").addEventListener("click", calculate);
