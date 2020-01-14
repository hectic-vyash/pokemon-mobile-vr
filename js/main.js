var BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
var STARTER_POKEMONS = document.getElementsByClassName("starter_pokemon");
var FIGHTER_POKEMONS = document.getElementsByClassName("fighter_pokemon");
var STARTER_POKEMON_LIST = []
var FIGHTER_POKEMON_LIST = []
var STARTER_POKEMON;
var STARTER_POKEMON_INDEX;
var FIGHTER_COORDINATES = ["-2 1 -4", "-5 1 1", "3 1 -6", "5 1 -3", "1 1 7", "7 1 2", "4 1 2", "-5 1 -6", "-2 1 2"];

window.onload = () => {
    setupGame();
    getPokemon(randomPokemon());
    for (let i = 0; i < STARTER_POKEMONS.length; i++) {
        STARTER_POKEMONS[i].onmouseenter = (event) => {
            if (STARTER_POKEMON == null){
                STARTER_POKEMON = STARTER_POKEMON_LIST[i]
                STARTER_POKEMON_INDEX = i;
                console.log(STARTER_POKEMON);
                $('.starter_pokemon').remove();
                $('.text').attr('value', 'SELECT FIGHTER POKEMON');
                getFighterPokemon();
            }
        }
    }
}

const setupGame = () => {
    $('.fighter_pokemon').attr('visible', 'false');
}

const getPokemon = () => {
    for (let i = 0; i < STARTER_POKEMONS.length; i++) {
        fetch(BASE_URL + randomPokemon())
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            STARTER_POKEMON_LIST.push(response)
            STARTER_POKEMONS[i].setAttribute("src", response.sprites.front_default)
        })
    }
}

const getFighterPokemon = () => {
    $('.fighter_pokemon').attr('visible', 'true');
    for (let i = 0; i < FIGHTER_POKEMONS.length; i++) {
        fetch(BASE_URL + randomPokemon())
        .then((data) => {
            return data.json();
        })
        .then((response) => {
            FIGHTER_POKEMON_LIST.push(response)
            console.log(response.name);
            FIGHTER_POKEMONS[i].setAttribute("src", response.sprites.front_default)
            FIGHTER_POKEMONS[i].setAttribute("position", FIGHTER_COORDINATES[randomLocation()]);
            // console.log(FIGHTER_COORDINATES[randomLocation()])
        })
    }
}

const randomPokemon = () => {
    return Math.floor(Math.random() * 807) + 1;
}

const randomLocation = () => {
    return Math.floor(Math.random() * FIGHTER_POKEMONS.length) + 1;
}