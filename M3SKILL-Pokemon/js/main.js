
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


let Show = "One piece";
fetch("https://api.tvmaze.com/search/shows?q=" + Show)
    .then(response => response.json())
    .then(realData => {
        document.getElementById("js--search-title").innerText = realData[0].show.name;
        document.getElementById("js--search-text").innerText = realData[0].show.summary.replace(/<\/?p>/g, '');
    });


document.getElementById("js--input").onkeyup = function(event) {
    if (event.keyCode === 13) { 
        fetch("https://api.agify.io?name=" + this.value)
            .then(response => response.json())
            .then(realData => {
                document.getElementById("js--name").innerText = this.value + " is " + realData.age + " years old";
                this.style.display = 'none'; 
            });
    }
};