
const readline = require("node:readline").createInterface({
    input: process.stdin,
    ouput: process.stdout,
});

const helloWorld = "Hello World!";

readline.question(`solve for x: `, equation => {
    let x;
    let solve = Math.log(x + 2);
    console.log(`Equation solves x for: ${solve}!`);
    readline.close();
})

console.log(helloWorld);

// node-cmd kjøres i noe som heter REPL
