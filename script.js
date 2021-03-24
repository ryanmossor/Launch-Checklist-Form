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
// window.addEventListener("load", () => {

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

   // if (pilotName.value.trim() == null || !isValidName(pilotName.value.trim())) {
   //    validStatus = false;
   // } else if (copilotName.value.trim() == null || !isValidName(copilotName.value.trim())) {
   //    validStatus = false;
   // } else if (fuelLevel.value.trim() === '' || fuelLevel.value.trim() == null || isNaN(fuelLevel.value.trim())) {
   //    validStatus = false;
   // } else if (cargoMass.value.trim() === '' || cargoMass.value.trim() == null || isNaN(cargoMass.value.trim())) {
   //    validStatus = false;
   // }

   // Check that pilot names are valid strings; check that fuel level/cargo mass are numbers
   if (!isValidName(pilotName.value.trim()) || !isValidName(copilotName.value.trim())) {
      validStatus = false;
   } else if (isNaN(fuelLevel.value.trim()) || isNaN(cargoMass.value.trim())) {
      validStatus = false;
   }

   // if (!isValidName(inputs[0].value.trim()) || !isValidName(inputs[1].value.trim())) {
   //    validStatus = false;
   // } else if (isNaN(inputs[2].value.trim()) || isNaN(inputs[3].value.trim())) {
   //    validStatus = false;
   // }

   // Check that inputs are not null/undefined/empty
   for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() == null || inputs[i].value.trim() === '') {
         completedStatus = false;
      }
   }

   console.log(pilotName.value.trim());
   console.log(copilotName.value.trim());
   console.log(fuelLevel.value.trim());
   console.log(cargoMass.value.trim());
   console.log(validStatus);

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

   // form.addEventListener("submit", validateForm);
// });

form.addEventListener("submit", validateForm);