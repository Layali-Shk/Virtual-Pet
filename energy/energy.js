let energy = 100;
const minEnergy = 0;
const maxEnergy = 100;

let energyDiv = document.getElementById("energy-display");

function updateEnergyDisplay() {
    energyDiv.textContent = "Energy = " + energy;
}

updateEnergyDisplay();

function energyDecrease(){
    energy -= 2
    if(energy < 0){
        energy = minEnergy;
    }
    updateEnergyDisplay()
    energyHealthDecrease()
}

function energyHealthDecrease(){
    if (energy <= 0){
        health -= 10
    } else if (energy > 0 && energy <=20){
        health -= 5
    }else{
        health += 2
    }

}



setInterval(energyDecrease, 5000);