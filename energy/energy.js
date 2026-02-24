let energy = 100;
const minEnergy = 0;
const maxEnergy = 100;

let energyDiv = document.getElementById("energy-display");
let sleepDiv = document.getElementById("sleep-display");
let sleepButton = document.getElementById("sleep-button");

let sleeping = false;

function toggleSleep() {
    sleeping = !sleeping;
    updateSleepDisplay();
}

sleepButton.addEventListener("click", toggleSleep);

function updateSleepDisplay() {
    if (sleeping) {
        sleepDiv.textContent = "Current status: Sleeping ";
        sleepButton.textContent = "Wake";
    } else {
        sleepDiv.textContent = "Current status: Awake ";
        sleepButton.textContent = "Sleep";
    }
}

function updateEnergyDisplay() {
    energyDiv.textContent = "Energy = " + energy;
}

function energyDecrease(){
    if (energy <= 0){
        health -= 10;
    } else if (energy <= 20){
        health -= 5;
    } else {
        health += 2;
    }
}

function energyIncrease() {
    if (sleeping) {
        if (energy < 30) {
            energy += 5;
        } else {
            energy += 2;
        }
    } else {
        energy -= 2;
    }

    if (energy > maxEnergy) energy = maxEnergy;
    if (energy < minEnergy) energy = minEnergy;

    energyDecrease();

    updateEnergyDisplay();
}

updateEnergyDisplay();
updateSleepDisplay();

setInterval(energyIncrease, 5000);
