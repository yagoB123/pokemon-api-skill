
let currentPokemonImage = new Image();

fetch("https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 250 + 1))
    .then(res => res.json())
    .then(realData => {
        document.getElementById("js--pokemon-img").src = realData.sprites.front_default;
        currentPokemonImage.src = realData.sprites.front_default;
        document.getElementById("js--pokemon-name").innerText = realData.forms[0].name.charAt(0).toUpperCase() + realData.forms[0].name.slice(1);
    });

document.getElementById("js--catch-button").onclick = function() {
    const catchNumber = Math.floor(Math.random() * 2);

    if (catchNumber === 0) {
        document.getElementById("js--pokemon-text").innerText = "Pokemon fled!";
    } else {
        document.getElementById("js--pokemon-text").innerText = "Pokemon caught!";
    }
};

let card = "Blue-Eyes White Dragon";
fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + card)
    .then(response => response.json())
    .then(realData => {
        document.getElementById("js--search-title").innerText = realData.data[0].cardname;
        document.getElementById("js--search-text").innerText = realData.data[0].desc;
    });

document.getElementById("js--input").addEventListener("keyup", (event) => { 
    if (event.keyCode === 13) { 
        fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + event.target.value)
            .then(response => response.json())
            .then(realData => {
                document.getElementById("js--name").innerText = event.target.value + " has " + realData.data[0].atk + " attack";
                event.target.style.display = 'none'; 
            });
    }
});

