const entrada = require("readline-sync");

let a: number = entrada.question("!");

    for ( let i = a - 1; 1 < i ; i--) {

    a = a*i;


    }

    console.log(a);