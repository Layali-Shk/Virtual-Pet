
let health = 100;
const maxHealth = 100;
const minHealth = 0;


let healthDiv = document.getElementById("health-display");
let barDiv = document.getElementById("health-bar");


function updateHealthDisplay() {
    healthDiv.textContent = "Health = " + health;
}


function fillBar() {
    let healthPercent = (health / maxHealth) * 100;
    barDiv.style.width = healthPercent + "%";

    if (healthPercent > 60) {
        barDiv.style.backgroundColor = "green";
    } else if (healthPercent > 30) {
        barDiv.style.backgroundColor = "yellow";
    } else {
        barDiv.style.backgroundColor = "red";
    }
}


function updateHealth() {
    if (hunger >= 200) {
        health -= 10;
    } else if (hunger >= 150) {
        health -= 5;
    } else {
        if (health < maxHealth) {
            health += 2;
        }
    }

    if (health > maxHealth) health = maxHealth;
    if (health < minHealth) health = minHealth;

    updateHealthDisplay();
    fillBar();
}



updateHealthDisplay();
fillBar();

setInterval(updateHealth, 5000);