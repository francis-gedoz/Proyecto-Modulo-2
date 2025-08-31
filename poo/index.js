class Question {
  constructor(texto, opciones, respuestaCorrecta) {
    this.texto = texto;
    this.opciones = opciones;
    this.respuestaCorrecta = respuestaCorrecta;
    this.respuestaUsuario = null;
  }
  hacerPregunta() {
    const entradaRespuesta = prompt(
      `${this.texto}\n\n1. ${this.opciones[0]}\n2. ${this.opciones[1]}\n3. ${this.opciones[2]}\n\nEscribe el número o el texto de tu respuesta:`
    );

    let respuesta = entradaRespuesta.trim();
    if (["1", "2", "3"].includes(respuesta)) {
      respuesta = this.opciones[parseInt(respuesta) - 1];
    }

    this.respuestaUsuario = respuesta;

    const esCorrecta = this.esCorrecta();

    console.log(`Pregunta: ${this.texto}`);
    console.log(`Tu respuesta: ${this.respuestaUsuario}`);
    console.log(esCorrecta ? "¡Respuesta Correcta!" : "Respuesta Incorrecta");
    console.log('---');
  }
  esCorrecta() {
    return (
      this.respuestaUsuario && this.respuestaUsuario.trim().toLowerCase() === this.respuestaCorrecta.trim().toLowerCase()
    );
  }
}

class Quiz {
  constructor(titulo) {
    this.titulo = titulo;
    this.preguntas = [];
    this.puntaje = 0;
  }
  agregarPregunta(question) {
    this.preguntas.push(question);
  }
  ingresarPreguntas() {
    const cantidadPreguntas = prompt("¿Cuántas preguntas deseas agregar? (ideal 8 o más)").trim();

    while (true) {
      const texto = prompt(`Ingresa el texto de la pregunta Nº${this.preguntas.length + 1}:`);
      const op1 = prompt("Opción 1:");
      const op2 = prompt("Opción 2:");
      const op3 = prompt("Opción 3:");
      const correcta = prompt("¿Cuál es la respuesta correcta?");

      const pregunta = new Question(texto, [op1, op2, op3], correcta);
      this.agregarPregunta(pregunta);

      if (this.preguntas.length >= cantidadPreguntas) {
        const continuar = prompt("¿Deseas agregar otra pregunta? (sí/no)").trim().toLowerCase();
        if (continuar !== "sí" && continuar !== "si") {
          break;
        }
      }
    }
  }
  realizarPreguntas() {
    this.preguntas.forEach((pregunta) => {
      pregunta.hacerPregunta();
    });
  }
  calcularPuntaje() {
    this.puntaje = this.preguntas.reduce((total, pregunta) => {
      return total + (pregunta.esCorrecta() ? 1 : 0);
    }, 0);
  }
  mostrarResultado() {
    console.log(`\n¡Encuesta completada!`);
    console.log(`Tu puntuación: ${this.puntaje} de ${this.preguntas.length}`);
  }
  iniciar() {
    console.log(`\n--- Encuesta: "${this.titulo}" ---\n`);
    this.ingresarPreguntas();
    this.realizarPreguntas();
    this.calcularPuntaje();
    this.mostrarResultado();
  }
}

const titulo = prompt("Ingresa el título de la encuesta:");
const quiz = new Quiz(titulo);
quiz.iniciar();
