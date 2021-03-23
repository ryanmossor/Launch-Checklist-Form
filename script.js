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

function validateName(name) {
   if (/^[a-z. ]+$/gi.test(name)) {
      return true;
   } else {
      return false;
   }
}

const form = document.getElementById("launchForm");

function validate(event) {
// form.addEventListener("submit", (event) => {
   // event.preventDefault();
   const pilotName = document.getElementById("pilotName").value.trim();
   const copilotName = document.getElementById("copilotName").value.trim();
   const fuelLevel = document.getElementById("fuelLevel").value.trim();
   const cargoMass = document.getElementById("cargoMass").value.trim();
   let validStatus = true;

   if (pilotName == null || !validateName(pilotName)) {
      validStatus = false;
   } else if (copilotName == null || !validateName(copilotName)) {
      validStatus = false;
   } else if (fuelLevel === '' || fuelLevel == null || isNaN(fuelLevel)) {
      validStatus = false;
   } else if (cargoMass === '' || cargoMass == null || isNaN(cargoMass)) {
      validStatus = false;
   }

   console.log(pilotName);
   console.log(copilotName);
   console.log(fuelLevel);
   console.log(cargoMass);
   console.log(validStatus);

   if (validStatus === false) {
      alert("All fields are required!");
      event.preventDefault();
   } else {
      event.preventDefault();
   }
// });
}

window.addEventListener("load", function() {
   let newForm = document.getElementById("launchForm");
   newForm.addEventListener("submit", validate);
});