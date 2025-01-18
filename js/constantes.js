
export const PI = Math.PI;

// Exporta lo que necesites
export let usuario = "Jonas";

// export default let password = "qwerty";  Error
// export default const password = "qwerty";  Error
// Primero las declaras
const password = "qwerty";
// export default password;

const hello = () => console.log("Hola")

// Solo puedes tener un export default
// default
export default function saludar() {
    console.log("Hola modulos +ES6 - default func saludar")
}

export class Saludar {
    constructor() {
        console.log("Hola modulos +ES6 - default class Saludar")
    }
}