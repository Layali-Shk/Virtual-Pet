let hunger = 50
let hungerDiv = document.getElementById("hunger-display");
hungerDiv.textContent="Hunger = "+ hunger;

let feedButton = document.getElementById("feed-button");
feedButton.addEventListener("click", function(){
    hunger = hunger-5;
    if (hunger < 0) hunger = 0;
    hungerDiv.textContent= "Hunger = " + hunger;

});

function increase(){
    hunger += 10;
    if(hunger > 200){
        hunger = 200;
    }
    hungerDiv.textContent = "Hunger = " + hunger;
}
setInterval(increase, 5000);