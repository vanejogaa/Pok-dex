const myMain$$ = document.querySelector("main");
console.log(myMain$$);

//RECOGIDA DATOS API

const getCharacter = async () => {
    const arrayPokemon = [];
    for(let i = 1; i < 151; i++) {
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${i}`);
        const res = await response.json();
        console.log(res);
        arrayPokemon.push(res);
    }
    
    return arrayPokemon;
    
}


//RECOGIDA DE DATOS DE CADA POKEMON

const mapPokemons = (pokemons) => {
return pokemons.map((pokemon) => ( {
//console.log(pokemons);
    name: pokemon.name,
    image: pokemon.sprites['front_default'],
    type: pokemon.types[0].type.name,
    id: pokemon._id,
})) ;
};

const drawPokemons = (pokemons) => {
    for(let pokemon of pokemons) {
        const divPokemon = document.createElement("div");
        const nombrePokemon = document.createElement("p");
        nombrePokemon.textContent = pokemon.name;
        divPokemon.appendChild(nombrePokemon);
        

        let pokemonImage = document.createElement("img");
        pokemonImage.setAttribute("src", pokemon.image);
        pokemonImage.setAttribute("alt", pokemon.name);
        divPokemon.appendChild(pokemonImage);

        let pokemonType = document.createElement("p");
        pokemonType.textContent = pokemon.type;
        divPokemon.appendChild(pokemonType);

        myMain$$.append(divPokemon);

    }
}


//BUSCAR AL POKÉMON

const fetchPoke = (pokemons) => {
    const poke$$ = documento.querySelector("entrada");
    poke$$.addEventListener("entrada", () =>
    encontrarPokemons (poke$$.valor, pokemons)
    ) ;
};

encontrarPokemons = (filter, array) => {
    let filteredPokemons = array.filter((pokemon) =>
    pokemon.name().includes(filter.toLowerCase())
    ) ;
    drawPokemons();
} ;


//FUNCION INIT

const init = async () => {
    const pokemons = await getCharacter();
    const mappedCharacters = mapPokemons(pokemons);
    drawPokemons(mappedCharacters);
  };
  init();




