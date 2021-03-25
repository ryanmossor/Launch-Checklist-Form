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
   
   document.getElementById("pilotStatus").innerText = `Pilot ${pilotName.value.trim()} is ready for launch`;
   document.getElementById("copilotStatus").innerText = `Co-pilot ${copilotName.value.trim()} is ready for launch`;

   if (fuelLevel.value < 10000) {
      faultyItems.style.visibility = 'visible';
      fuelStatus.innerText = 'Fuel level too low for launch';
      launchStatus.innerText = 'Shuttle not ready for launch';
      launchStatus.style.color = 'red';
   }
   
   if (cargoMass.value > 10000) {
      faultyItems.style.visibility = 'visible';
      cargoStatus.innerText = 'Cargo mass too high for launch';
      launchStatus.innerText = 'Shuttle not ready for launch';
      launchStatus.style.color = 'red';
   } 
   
   if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
      fuelStatus.innerText = 'Fuel level high enough for launch';
      cargoStatus.innerText = 'Cargo mass low enough for launch';
      launchStatus.innerText = 'Shuttle is ready for launch';
      faultyItems.style.visibility = 'visible';
      launchStatus.style.color = 'green';
   }
}

const fetchData = async() => {
   let response = await fetch('https://handlers.education.launchcode.org/static/planets.json');
   let data = await response.json();
   return data;
}

const updateDestination = async() => {
   let planetData = await fetchData();
   let randomIndex = Math.floor(Math.random() * 7);    // Choose random destination
   const missionTarget = document.getElementById('missionTarget');
   
   missionTarget.innerHTML = `<h2>Mission Destination</h2>
   <ol>
      <li>Name: ${planetData[randomIndex].name}</li>
      <li>Diameter: ${planetData[randomIndex].diameter}</li>
      <li>Star: ${planetData[randomIndex].star}</li>
      <li>Distance from Earth: ${planetData[randomIndex].distance}</li>
      <li>Number of Moons: ${planetData[randomIndex].moons}</li>
   </ol>
   <img src="${planetData[randomIndex].image}">`;
}

const isFormComplete = () => {
   let inputs = document.getElementsByTagName("input");
   
   // Check that inputs are not null/undefined/empty
   for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() == null || inputs[i].value.trim() === '') {
         return false;
      }
   }
   return true;
}

const validateInputs = () => {
   // Check that pilot names are valid strings; check that fuel level/cargo mass are numbers
   if (!isValidName(pilotName.value.trim()) || !isValidName(copilotName.value.trim())) {
      return false;
   } else if (isNaN(fuelLevel.value.trim()) || isNaN(cargoMass.value.trim())) {
      return false;
   } else {
      return true;
   }
}

const validateForm = event => {
   event.preventDefault();
   if (!isFormComplete()) {
      alert("All fields are required!");
   } else if (!validateInputs()) {
      alert("Make sure to enter valid information for each field!");
   } else {
      updateShuttleRequirements();
      updateDestination();
   }
}

const form = document.getElementById("launchForm");
form.addEventListener("submit", validateForm);