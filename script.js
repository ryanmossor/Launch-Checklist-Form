/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

const form = document.getElementById("launchForm");

const pilotName = document.getElementById("pilotName");
const copilotName = document.getElementById("copilotName");
const fuelLevel = document.getElementById("fuelLevel");
const cargoMass = document.getElementById("cargoMass");

const isValidName = name => {
   return /^[a-z. ]+$/gi.test(name);
}

const validateForm = event => {
   let inputs = document.getElementsByTagName("input")
   let validStatus = true;
   let completedStatus = true;

   // Check that pilot names are valid strings; check that fuel level/cargo mass are numbers
   if (!isValidName(pilotName.value.trim()) || !isValidName(copilotName.value.trim())) {
      validStatus = false;
   } else if (isNaN(fuelLevel.value.trim()) || isNaN(cargoMass.value.trim())) {
      validStatus = false;
   }

   // Check that inputs are not null/undefined/empty
   for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() == null || inputs[i].value.trim() === '') {
         completedStatus = false;
      }
   }

   if (validStatus === false) {
      alert("Make sure to enter valid information for each field!");
      event.preventDefault();
   } else if (completedStatus === false) {
      alert("All fields are required!");
      event.preventDefault();
   } else {
      event.preventDefault();
   }
}

form.addEventListener("submit", validateForm);