document.querySelector('.loading').innerHTML = `<img src="img/Rolling-1s-200px.gif"/>`;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function catchPokemon(gameId) {
    try {
        console.log(gameId);
        const response = await fetch('https://api.pokemontcg.io/v2/cards/' + gameId);
        const jsonResults = await response.json();
    const pokemonArray = jsonResults.data;
    console.log(pokemonArray);

        document.title = pokemonArray.name;
        document.querySelector('.con').innerHTML = `
        <h1>${pokemonArray.name}</h1>
        <p>Rarity: ${pokemonArray.rarity}</p>
        <p>Type: ${pokemonArray.types}</p>
        <p>Artist: ${pokemonArray.artist}</p>
        <p>Supertype: ${pokemonArray.supertype}</p>
        `;
        document.querySelector('.background__image').style.backgroundImage = `url('${pokemonArray.images.small}')`;
    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertToUser(
            'An error has occured',
            'danger'
        );
        console.log(error);
    } finally {
    document.querySelector('.loading').classList.add('hide');
    }
}

catchPokemon(id);