var BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
var STARTER_POKEMON = document.getElementsByClassName("starter_pokemon");
var RESPONSE;

window.onload = () => {
    getPokemon(randomPokemon());
    // selectPokemon();
}

const getPokemon = () => {
    for (let i = 0; i < STARTER_POKEMON.length; i++) {
        fetch(BASE_URL + randomPokemon())
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            STARTER_POKEMON[i].setAttribute("src", response.sprites.front_default)
        })
    }
   
}

const randomPokemon = () => {
    return Math.floor(Math.random() * 807) + 1;
}