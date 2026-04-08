export const preguntasJavascript = [
  {
    categoria: "javascript",
    pregunta: "¿Qué es y para qué sirve structuredClone?",
    respuesta:
      "Es un método de JavaScript que sirve para crear una copia profunda (clon) de objetos, permitiendo manipular la copia sin afectar por referencia al objeto original[cite: 2, 3].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Para qué sirve Math.floor?",
    respuesta:
      "Sirve para redondear un número hacia abajo al entero más cercano (ej: 19.7 -> 19)[cite: 74, 75, 76].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Para qué sirve Math.ceil?",
    respuesta:
      "Sirve para redondear un número hacia arriba al entero más cercano (ej: 4.5 -> 5)[cite: 77, 78].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Para qué sirve Math.round?",
    respuesta:
      "Redondea al entero más cercano: si el decimal es 0.5 o más, redondea hacia arriba; si es 0.4 o menos, hacia abajo[cite: 79, 80, 81].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cuál es la diferencia principal entre Set y Map?",
    respuesta:
      "Set guarda solo valores únicos sin duplicados, mientras que Map guarda pares clave-valor donde las claves son únicas pero los valores pueden repetirse[cite: 83, 84, 85].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué hace JSON.stringify()?",
    respuesta:
      "Convierte un objeto o array de JavaScript en una cadena de texto (string) con formato JSON[cite: 112, 113].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué hace JSON.parse()?",
    respuesta:
      "Convierte una cadena de texto JSON en un objeto de JavaScript real[cite: 117, 118].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cómo funciona el método map()?",
    respuesta:
      "Recorre un array y devuelve un nuevo array con la misma cantidad de elementos transformados, sin modificar el original[cite: 122, 123, 124].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Para qué se utiliza el método filter()?",
    respuesta:
      "Crea un nuevo array con todos los elementos que cumplen una condición específica, funcionando de forma inmutable[cite: 141, 142, 143].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué caracteriza al método forEach()?",
    respuesta:
      "Recorre un array ejecutando una función por cada elemento, pero no devuelve nada (retorna undefined)[cite: 152, 153, 154].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cuándo es útil usar reduce()?",
    respuesta:
      "Cuando se quiere reducir un array a un único valor final (como una suma o un conteo) usando un acumulador[cite: 164, 167, 168].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cuál es la diferencia entre find() y filter()?",
    respuesta:
      "find() devuelve solo el primer elemento que cumple la condición, mientras que filter() devuelve todos los que coincidan en un nuevo array[cite: 181, 182, 183].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué devuelven los métodos some() y every()?",
    respuesta:
      "some() devuelve true si al menos un elemento cumple la condición; every() devuelve true solo si todos los elementos la cumplen[cite: 193, 207].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cómo funciona el método sort() por defecto?",
    respuesta:
      "Ordena los elementos como strings por defecto. Para ordenar números u objetos correctamente, se debe pasar una función de comparación[cite: 216, 218, 223].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué hace el método includes()?",
    respuesta:
      "Verifica si un elemento existe en un array o un texto en un string, devolviendo true o false[cite: 224, 225, 229].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué es LocalStorage?",
    respuesta:
      "Es una herramienta del navegador que permite guardar datos (solo strings) de forma persistente como pares clave-valor[cite: 236, 237, 242].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué representan window.innerWidth y window.innerHeight?",
    respuesta:
      "Representan el ancho y el alto visible (en píxeles) de la ventana del navegador, respectivamente[cite: 251, 252, 256, 257].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Por qué es importante usar window.removeEventListener?",
    respuesta:
      "Para dejar de escuchar eventos y evitar que el navegador siga ejecutando funciones de componentes que ya no se están usando[cite: 268, 269, 270].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Para qué se utiliza Array.from?",
    respuesta:
      "Es una forma rápida de crear un array con una cantidad específica de elementos (por ejemplo, para renderizar elementos repetidos en React sin datos reales)[cite: 277, 278, 282].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué es el Spread Operator (...) y para qué sirve?",
    respuesta:
      "Es un operador que permite expandir elementos de un iterable (como un array o un objeto) en lugares donde se esperan múltiples elementos. Se usa para clonar objetos/arrays de forma superficial o combinar varios en uno solo.",
  },
  {
    categoria: "javascript",
    pregunta:
      "¿Para qué se utiliza la palabra clave 'as' en el contexto de TypeScript?",
    respuesta:
      "Se utiliza para realizar una 'aserción de tipo' (type assertion). Le indica al compilador que trate a una variable como un tipo específico cuando el programador tiene más certeza que el sistema sobre el tipo de dato[cite: 285].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cómo funcionan los operadores lógicos ??, && y ||?",
    respuesta:
      "El operador '??' (nullish coalescing) devuelve el lado derecho solo si el izquierdo es null o undefined; '&&' (AND) devuelve el segundo valor si el primero es verdadero; '||' (OR) devuelve el segundo valor si el primero es falso (falsy)[cite: 286].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cuál es la diferencia entre Bracket notation y Dot notation?",
    respuesta:
      "Dot notation (objeto.propiedad) es la forma estándar y legible de acceder a datos. Bracket notation (objeto['propiedad']) permite usar strings dinámicos o variables para acceder a las llaves de un objeto[cite: 287].",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué es el Destructuring de objetos y arrays?",
    respuesta:
      "Es una expresión que permite 'desempaquetar' valores de arrays o propiedades de objetos en variables distintas de forma rápida y limpia (ej: const { nombre } = usuario)[cite: 288].",
  },
];
