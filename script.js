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

const updateShuttleRequirements = () => {
   const faultyItems = document.getElementById("faultyItems");
   const launchStatus = document.getElementById("launchStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");
   
   document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName.value.trim()} is ready for launch`;
   document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotName.value.trim()} is ready for launch`;

   if (fuelLevel.value < 10000) {
      faultyItems.style.visibility = 'visible';
      fuelStatus.innerHTML = 'Fuel level too low for launch';
      launchStatus.innerHTML = 'Shuttle not ready for launch';
      launchStatus.style.color = 'red';
   } else if (cargoMass.value > 10000) {
      faultyItems.style.visibility = 'visible';
      cargoStatus.innerHTML = 'Cargo mass too high for launch';
      launchStatus.innerHTML = 'Shuttle not ready for launch';
      launchStatus.style.color = 'red';
   } else {
      fuelStatus.innerHTML = 'Fuel level high enough for launch';
      cargoStatus.innerHTML = 'Cargo mass low enough for launch';
      launchStatus.innerHTML = 'Shuttle is ready for launch';
      launchStatus.style.color = 'green';
   }
}

const validateForm = event => {
   let inputs = document.getElementsByTagName("input");
   let completedStatus = true;
   let validStatus = true;

   // Check that inputs are not null/undefined/empty
   for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() == null || inputs[i].value.trim() === '') {
         completedStatus = false;
      }
   }

   // Check that pilot names are valid strings; check that fuel level/cargo mass are numbers
   if (!isValidName(pilotName.value.trim()) || !isValidName(copilotName.value.trim())) {
      validStatus = false;
   } else if (isNaN(fuelLevel.value.trim()) || isNaN(cargoMass.value.trim())) {
      validStatus = false;
   }

   if (completedStatus === false) {
      alert("All fields are required!");
      event.preventDefault();
   } else if (validStatus === false) {
      alert("Make sure to enter valid information for each field!");
      event.preventDefault();
   } else {
      updateShuttleRequirements();
      event.preventDefault();
   }
}

form.addEventListener("submit", validateForm);