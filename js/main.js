var BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
var STARTER_POKEMONS = document.getElementsByClassName("starter_pokemon");
var STARTER_POKEMON_LIST = []
var STARTER_POKEMON;

window.onload = () => {
    getPokemon(randomPokemon());
    selectPokemon();
}

const selectPokemon = () => {
    for (let i = 0; i < STARTER_POKEMONS.length; i++) {
        STARTER_POKEMONS[i].onmouseenter = (event) => {
            STARTER_POKEMON = STARTER_POKEMON_LIST[i]
            console.log(STARTER_POKEMON.name);
            
        };
    }
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

const randomPokemon = () => {
    return Math.floor(Math.random() * 807) + 1;
}