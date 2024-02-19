const dataButton = document.getElementById("get-data-btn");
const imgUrl = document.getElementById("img-url");
const pokemonDescription = document.getElementById("pokemons");
const myText = document.getElementById("my-text");

async function getData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();

    console.log(data);
}
// mer event handling og JSON/Array methods (f.eks map() og filter())

dataButton.addEventListener("click", getData);

myText.textContent = "";