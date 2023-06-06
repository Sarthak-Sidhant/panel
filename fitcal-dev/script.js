document.getElementById("choice").addEventListener("change", function() {
    var choice = document.getElementById("choice").value;
    var inputFields = document.getElementById("input-fields");
    inputFields.innerHTML = "";
  
    if (choice === "1" || choice === "2" || choice === "4" || choice === "5" || choice === "6") {
      createInputField("weight", "Weight (kg):", "number");
      createInputField("height", "Height (cm):", "number");
      createInputField("age", "Age (years):", "number");
    }
  
    if (choice === "3" || choice === "4" || choice === "5" || choice === "6" || choice === "7") {
      createInputField("activity", "Activity Level:", "number");
    }
    if (choice === "7") {
        createInputField("weight", "Weight (kg):", "number");
        createInputField("height", "Height (cm):", "number");
        createInputField("age", "Age (years):", "number");
      }
      
  });
  
  function createInputField(id, label, type) {
    var inputFields = document.getElementById("input-fields");
    var inputLabel = document.createElement("label");
    inputLabel.setAttribute("for", id);
    inputLabel.classList.add("label");
    inputLabel.textContent = label;
    var input = document.createElement("input");
    input.setAttribute("id", id);
    input.setAttribute("type", type);
    input.classList.add("input");
    inputFields.appendChild(inputLabel);
    inputFields.appendChild(input);
  }
  
  function calculate() {
    var choice = document.getElementById("choice").value;
    var weight = parseInt(document.getElementById("weight").value);
    var height = parseInt(document.getElementById("height").value);
    var age = parseInt(document.getElementById("age").value);
    var activity = parseInt(document.getElementById("activity").value);
    var result = document.getElementById("result");
  
    if (choice === "1") {
      var bmi = weight / (height / 100) ** 2;
      result.innerHTML = "Your BMI is " + bmi.toFixed(2);
    } else if (choice === "2") {
      var bmr = 10 * weight + 6.25 * height - 5 * age;
      result.innerHTML = "Your BMR is " + bmr.toFixed(2);
    } else if (choice === "3") {
      var bmr = 10 * weight + 6.25 * height - 5 * age;
      var tdee = bmr * activity;
      result.innerHTML = "Your TDEE is " + tdee.toFixed(2);
    } else if (choice === "4") {
      var bmr = 10 * weight + 6.25 * height - 5 * age;
      var tdee = bmr * activity;
      var lose = tdee - 500;
      result.innerHTML = "You need " + lose.toFixed(2) + " calories to lose weight";
    } else if (choice === "5") {
      var bmr = 10 * weight + 6.25 * height - 5 * age;
      var tdee = bmr * activity;
      var gain = tdee + 500;
      result.innerHTML = "You need " + gain.toFixed(2) + " calories to gain weight";
    } else if (choice === "6") {
      var bmr = 10 * weight + 6.25 * height - 5 * age;
      var tdee = bmr * activity;
      result.innerHTML = "You need " + tdee.toFixed(2) + " calories to maintain weight";
    } else if (choice === "7") {
        var cmHeight = height / 100;
        var bmi = weight / cmHeight ** 2;
        var bmr = 10 * weight + 6.25 * height - 5 * age;
        var tdee = bmr * activity;
        var lose = tdee - 500;
        var gain = tdee + 500;
        result.innerHTML =
          "Your BMI is " + bmi.toFixed(2) +
          "<br />Your BMR is " + bmr.toFixed(2) +
          "<br />Your TDEE is " + tdee.toFixed(2) +
          "<br />You need " + lose.toFixed(2) + " calories to lose weight" +
          "<br />You need " + gain.toFixed(2) + " calories to gain weight" +
          "<br />You need " + tdee.toFixed(2) + " calories to maintain weight";
      }
      
  }
  
  document.getElementById("calculate-btn").addEventListener("click", calculate);
  