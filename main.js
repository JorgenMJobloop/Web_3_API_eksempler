const dataButton = document.getElementById("get-data-btn");
const imgUrl = document.getElementById("img-url");
const pokemonDescription = document.getElementById("pokemons");
const myText = document.getElementById("my-text");

let myObject = {
    1: "Hello",
    2: "World",
    3: ["Hello", "World"]
};

let myArray = ["Hello", "World", "From", "My", "Array"];

async function getData() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();

    console.log(data);
}
// mer event handling og JSON/Array methods (f.eks map() og filter())

dataButton.addEventListener("click", getData);

// vanlig for-loop

// for (let i = 0; i < myArray.length; i++) {
//     console.log(i);
//     console.log(myArray[i]);
// }

// filter method som gjør det samme som en index-basert for-loop
myArray.filter((arr, i, newArr) => (console.log(arr, i, newArr.push("Array 1"), newArr.push("Array 2"), newArr)));
// myArray.reverse();

console.log(myObject[3]);