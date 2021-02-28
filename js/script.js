document.querySelector('.loading').innerHTML = `<img src="img/Rolling-1s-200px.gif"/>`;


async function catchPokemon() {
    try {
        const response = await fetch('https://api.pokemontcg.io/v2/cards/');
        const jsonResults = await response.json();
        const pokemonArray = jsonResults.data;
        console.log(pokemonArray);
        
        for (let i = 0; i < pokemonArray.length; i++) {

            if (i === 24) {
                break;
            }

        document.querySelector('.cardsContainer').innerHTML += `
         <div class="cards">
         <img src="${pokemonArray[i].images.small}" />
         <h1>${pokemonArray[i].name}</h1>
         <p>Pokemon type: ${pokemonArray[i].types}</p>
         <p>Rarity: ${pokemonArray[i].rarity}</p>
         <div class="btn">
         <a href="details.html?id=${pokemonArray[i].id}">Read More</a>
         </div>
         </div>
        `;
    }
    } catch (error) {
        document.querySelector('.alert').innerHTML += showAlertToUser(
            'An error has occurred',
            'danger'
            );
            console.log(error);
    } finally {
        document.querySelector('.loading').classList.add('hide');
    }
}

catchPokemon();



