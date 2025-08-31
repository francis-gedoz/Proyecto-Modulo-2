
# Encuesta Interactiva en JavaScript

Este proyecto permite crear y realizar una encuesta interactiva de preguntas y respuestas múltiples a través del navegador, utilizando `prompt()` y `console.log()` para la interacción con el usuario. Existen dos versiones del código que cumplen la misma funcionalidad, implementadas con dos enfoques distintos:

- **Versión Funcional (PF)**
- **Versión Orientada a Objetos (POO)**

---

## ¿Qué hace este programa?

1. Solicita al usuario un **título** para la encuesta.
2. Permite **crear preguntas** con 3 opciones y una respuesta correcta.
3. Pregunta al usuario si desea agregar más preguntas.
4. Presenta las preguntas una por una y permite responder.
5. Verifica si las respuestas son correctas o incorrectas.
6. Muestra el **puntaje final** obtenido.

---

## Versión Funcional (PF)

Esta versión utiliza funciones independientes y estructuras de datos simples (`objetos` y `arrays`) para manejar la lógica.

- No se usan clases ni instancias.
- Cada función tiene una tarea específica: crear preguntas, registrar respuestas, calcular puntaje, etc.
- Los datos fluyen entre funciones a través de parámetros y valores de retorno.
- Es más sencilla de leer para quienes recién empiezan con JavaScript.

**Ventajas**:
- Fácil de entender.
- Código modular y explícito.
- Buena para scripts pequeños.

**Desventajas**:
- Menos escalable.
- No encapsula comportamiento con datos (puede generar redundancia si crece el proyecto).

---

## Versión Orientada a Objetos (POO)

Esta versión usa clases (`Question` y `Quiz`) para encapsular la lógica y los datos.

- Cada pregunta es una instancia de la clase `Question`, con sus métodos.
- Toda la encuesta está gestionada por una clase `Quiz`, que contiene preguntas y maneja el flujo completo.
- Hay un mayor grado de reutilización, encapsulamiento y estructura.

**Ventajas**:
- Código más organizado.
- Mayor escalabilidad.
- Facilita la reutilización y mantenimiento del código.

**Desventajas**:
- Curva de aprendizaje ligeramente mayor.
- Más líneas de código para una misma funcionalidad simple.

---

## Tecnologías utilizadas

- JavaScript
- `prompt()` y `console.log()` para interacción

---

## Objetivo Educativo

Este proyecto es un buen ejemplo práctico para comparar enfoques de desarrollo en JavaScript. La versión funcional es ideal para lógica directa y pequeña escala, mientras que la versión orientada a objetos aporta estructura y claridad a medida que el proyecto crece.
Ambas versiones son perfectamente válidas: elegir una u otra depende del contexto y los objetivos del desarrollo.




