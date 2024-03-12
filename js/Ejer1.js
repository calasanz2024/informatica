//const saludo = require("./saludos.js");
//console.log(saludo.saludar("Mary"));
//console.log(saludo.saludoMundo());

//Desestructuración (cuando solo me importa un elemento del modulo a importar)
const { saludoMundo } = require("./saludos.js");
console.log(saludoMundo());