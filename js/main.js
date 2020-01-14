var BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
var STARTER_POKEMONS = document.getElementsByClassName("starter_pokemon");
var STARTER_POKEMON_LIST = []
var STARTER_POKEMON;
var STARTER_POKEMON_INDEX;

window.onload = () => {
    getPokemon(randomPokemon());
    for (let i = 0; i < STARTER_POKEMONS.length; i++) {
        STARTER_POKEMONS[i].onmouseenter = (event) => {
            if (STARTER_POKEMON == null){
                STARTER_POKEMON = STARTER_POKEMON_LIST[i]
                STARTER_POKEMON_INDEX = i;
                console.log(STARTER_POKEMON);
                $('.starter_pokemon').remove();
                $('.text').attr('value', 'SELECT FIGHTER POKEMON');
            }
        }
    }
}

const selectPokemon = () => {

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