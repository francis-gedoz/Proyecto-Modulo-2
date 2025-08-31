function crearPregunta(pregunta, opciones, respuestaCorrecta) { // Función para inicializar la creación de una pregunta
    return {
        pregunta: pregunta,
        opciones: opciones,
        respuestaCorrecta: respuestaCorrecta,
        respuestaUsuario: null
    };
}

function ingresarPreguntas() { // Función para definir una cantidad de preguntas (se puede seguir agregando)
    const preguntas = [];
    const cantidadPreguntas = prompt("¿Cuántas preguntas deseas agregar? (ideal 8 o más)").trim();

    while (true) {
        const texto = prompt(`Ingresa el texto de la pregunta Nº${preguntas.length + 1}:`);
        const op1 = prompt("Opción 1:");
        const op2 = prompt("Opción 2:");
        const op3 = prompt("Opción 3:");
        const correcta = prompt("¿Cuál es la respuesta correcta?");

        const objPregunta = crearPregunta(texto, [op1, op2, op3], correcta);
        preguntas.push(objPregunta);

        if (preguntas.length >= cantidadPreguntas) {
        const continuar = prompt("¿Deseas agregar otra pregunta? (sí/no)").trim().toLowerCase();
        if (continuar !== "sí" && continuar !== "si") {
          break;
        }
      }
    }

    return preguntas;
}

function realizarPreguntas(arrayPreguntas) { // Función para realizar las preguntas y registrar respuestas
    return arrayPreguntas.map(function(p) {
        const entradaRespuesta = prompt(
            `${p.pregunta}\n\n1. ${p.opciones[0]}\n2. ${p.opciones[1]}\n3. ${p.opciones[2]}\n\nEscribe el número o el texto de tu respuesta:`
      );

    let respuesta = entradaRespuesta.trim();
    if (["1", "2", "3"].includes(respuesta)) {
        respuesta = p.opciones[parseInt(respuesta) - 1];
      }

    const respondida = {
        pregunta: p.pregunta,
        opciones: p.opciones,
        respuestaCorrecta: p.respuestaCorrecta,
        respuestaUsuario: respuesta
    };

    const esCorrecta = respondida.respuestaUsuario.trim().toLowerCase() === respondida.respuestaCorrecta.trim().toLowerCase();

    console.log(`Pregunta: ${respondida.pregunta}`);
    console.log(`Tu respuesta: ${respondida.respuestaUsuario}`);
    console.log(esCorrecta ? "¡Respuesta Correcta!" : "¡Respuesta Incorrecta!");
    console.log('---');

    return respondida;

  });
}

function calcularPuntaje(preguntasRespondidas) { // Función para calcular el puntaje final
    return preguntasRespondidas.reduce(function(puntaje, p) {
        const esCorrecta = p.respuestaUsuario.trim().toLowerCase() === p.respuestaCorrecta.trim().toLowerCase();
    return puntaje + (esCorrecta ? 1 : 0);}, 0);
}

function ingresarTitulo() { // Función para ingresar el título de la encuesta y comenzar el proceso
    const titulo = prompt("Ingresa el título de la encuesta:");
    console.log(`\n--- Encuesta: "${titulo}" ---\n`);

    const preguntas = ingresarPreguntas();
    const preguntasRespondidas = realizarPreguntas(preguntas);
    const puntaje = calcularPuntaje(preguntasRespondidas);

    console.log(`\n¡Encuesta completada!`);
    console.log(`Tu puntuación: ${puntaje} de ${preguntasRespondidas.length}`);
}

ingresarTitulo();
