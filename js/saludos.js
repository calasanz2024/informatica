function saludar(nombre) {
    return `Hola, ${nombre}`;
  }

function saludoMundo() {
    return `!Hola, Mudo!`;
}

//exportando un solo elemento del módulo
//module.exports.saludando = saludar;
//module.exports.saludoTodo = saludoMundo;

//exportando varios elementos del modulo
module.exports = {
  saludar : saludar,
  saludoMundo : saludoMundo
};