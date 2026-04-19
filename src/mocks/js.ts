export const preguntasJavascript = [
  {
    categoria: "javascript",
    pregunta: "¿Qué es y para qué sirve structuredClone?",
    respuesta:
      "Es un método de JavaScript que sirve para crear una copia profunda (clon) de objetos, permitiendo manipular la copia sin afectar por referencia al objeto original. Sin structuredClone, modificar una propiedad del objeto clonado también modificaría el objeto fuente.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Para qué sirve Math.floor?",
    respuesta:
      "Sirve para redondear un número hacia abajo al entero más cercano. Por ejemplo: 19.7 se convierte en 19, y 2.5 se convierte en 2.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Para qué sirve Math.ceil?",
    respuesta:
      "Sirve para redondear un número hacia arriba al entero más cercano. Por ejemplo: 4.5 se convierte en 5 y 33.6 se convierte en 34.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Para qué sirve Math.round?",
    respuesta:
      "Redondea al entero más cercano: si el decimal es 0.5 o más se redondea hacia arriba, y si es 0.4 o menos se redondea hacia abajo. Por ejemplo: 19.2 → 19, 6.5 → 7, 10.9 → 11.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cuál es la diferencia principal entre Set y Map?",
    respuesta:
      "Set es una colección que guarda únicamente valores únicos, no permite duplicados. Map en cambio guarda pares clave-valor donde las claves deben ser únicas pero los valores sí pueden repetirse. Ambos tienen métodos como has(), delete(), clear() y la propiedad size.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué hace JSON.stringify()?",
    respuesta:
      "Convierte un objeto o array de JavaScript en una cadena de texto con formato JSON. Es útil para guardar objetos en LocalStorage o enviarlos por red, ya que esos medios solo aceptan strings.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué hace JSON.parse()?",
    respuesta:
      "Convierte una cadena de texto con formato JSON en un objeto de JavaScript real, permitiendo acceder a sus propiedades y manipularlo como cualquier objeto. Es el proceso inverso a JSON.stringify().",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cómo funciona el método map()?",
    respuesta:
      "Recorre un array, transforma cada elemento mediante una función callback y devuelve un nuevo array con la misma cantidad de elementos transformados, sin modificar el original. Es ideal para agregar campos a objetos o renderizar listas en React.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Para qué se utiliza el método filter()?",
    respuesta:
      "Recorre un array y devuelve un nuevo array que contiene solo los elementos que cumplen una condición específica. Trabaja de forma inmutable (no modifica el original) y es ideal para ocultar productos fuera de stock o filtrar usuarios por rol.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué caracteriza al método forEach()?",
    respuesta:
      "Recorre un array ejecutando una función callback en cada iteración, pero no devuelve nada (retorna undefined). En cada iteración da acceso al elemento actual, su índice y el array completo. Es ideal para ejecutar acciones como mostrar alertas o sumar valores.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cómo funciona reduce() y cuándo usarlo?",
    respuesta:
      "Recorre un array y en cada vuelta recibe un acumulador y el elemento actual. El acumulador guarda el resultado parcial de cada iteración y al final devuelve ese valor acumulado. Es útil para reducir un array a un solo resultado como una suma total, un conteo o transformarlo en un objeto resumen.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cuál es la diferencia entre find() y filter()?",
    respuesta:
      "find() recorre un array y devuelve únicamente el primer elemento que cumple la condición (o undefined si no encuentra ninguno). filter() en cambio devuelve todos los elementos que cumplen la condición en un nuevo array. find() se detiene al primer match, filter() recorre todo.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué devuelven los métodos some() y every()?",
    respuesta:
      "some() devuelve true si al menos un elemento del array cumple la condición dada, y false si ninguno la cumple. every() devuelve true solo si absolutamente todos los elementos cumplen la condición, y false si al menos uno no la cumple.",
  },
  {
    categoria: "javascript",
    pregunta:
      "¿Cómo funciona el método sort() y cuál es su comportamiento por defecto?",
    respuesta:
      "Permite ordenar los elementos de un array. Por defecto ordena los elementos como si fueran strings, lo que puede dar resultados incorrectos con números. Para ordenar correctamente números u objetos, es necesario pasarle una función de comparación como parámetro.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué hace el método includes() y qué parámetros recibe?",
    respuesta:
      "Verifica si un elemento existe dentro de un array, o si un texto está dentro de un string, devolviendo true o false. Recibe dos parámetros: el valor a buscar (obligatorio) y la posición desde donde empezar a buscar (opcional).",
  },
  {
    categoria: "javascript",
    pregunta:
      "¿Qué es LocalStorage y cuáles son sus características principales?",
    respuesta:
      "Es una herramienta del navegador que permite guardar datos localmente en el dispositivo del usuario como parte del Web Storage API. Guarda los datos como pares clave-valor, solo acepta strings (los objetos deben convertirse con JSON.stringify), y los datos persisten aunque se cierre el navegador.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cuáles son los métodos principales de LocalStorage?",
    respuesta:
      "setItem(clave, valor) guarda un dato, getItem(clave) lo lee, removeItem(clave) elimina un valor específico, clear() borra todo el almacenamiento, length devuelve la cantidad de claves almacenadas, y key(index) devuelve el nombre de una clave según su posición.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué es el objeto window en JavaScript?",
    respuesta:
      "Es el objeto global de JavaScript que representa la ventana del navegador. Contiene toda la información y funciones relacionadas al entorno del navegador donde se ejecuta la aplicación, como el tamaño de pantalla, la URL actual, el historial y los eventos.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué es window.innerWidth y window.innerHeight?",
    respuesta:
      "innerWidth es una propiedad que devuelve el ancho visible de la ventana del navegador en píxeles, sin contar la barra de scroll vertical. innerHeight devuelve el alto visible en píxeles, sin contar la barra de direcciones ni la barra de tareas del sistema operativo.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Para qué se utiliza window.addEventListener?",
    respuesta:
      "Es un método que permite escuchar eventos del navegador como scroll, click o resize, y ejecutar una función callback en respuesta a cada uno. Recibe dos parámetros: el nombre del evento a escuchar y la función callback que contiene la acción a realizar.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Por qué es importante usar window.removeEventListener?",
    respuesta:
      "Se utiliza para dejar de escuchar un evento del navegador. Si no se llama, el navegador continúa ejecutando la función del addEventListener incluso cuando el componente ya no está en uso, lo que puede generar comportamientos inesperados y pérdidas de rendimiento.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Para qué se utiliza Array.from?",
    respuesta:
      "Es un método que crea un array con una cantidad específica de elementos sin depender de datos reales. Es muy útil en React para renderizar una cantidad determinada de componentes (como esqueletos de carga) cuando aún no se tiene información, usando el índice de cada posición.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué es el Spread Operator (...) y para qué sirve?",
    respuesta:
      "Es un operador que expande los elementos de un iterable (array u objeto) en lugares donde se esperan múltiples valores. Se usa para clonar objetos o arrays de forma superficial, combinar varios en uno nuevo, o pasar elementos de un array como argumentos de una función.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Para qué se usa la palabra clave 'as' en TypeScript?",
    respuesta:
      "Se utiliza para realizar una aserción de tipo (type assertion), indicándole al compilador que trate una variable como un tipo específico. Se usa cuando el programador tiene más certeza que TypeScript sobre el tipo de dato con el que está trabajando.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cómo funcionan los operadores ??, && y ||?",
    respuesta:
      "El operador ?? (nullish coalescing) devuelve el lado derecho solo si el izquierdo es null o undefined. El operador && (AND) devuelve el segundo valor si el primero es verdadero (truthy). El operador || (OR) devuelve el segundo valor si el primero es falso (falsy).",
  },
  {
    categoria: "javascript",
    pregunta: "¿Cuál es la diferencia entre Bracket Notation y Dot Notation?",
    respuesta:
      "Dot notation (objeto.propiedad) es la forma estándar y más legible de acceder a las propiedades de un objeto. Bracket notation (objeto['propiedad']) permite usar strings dinámicos o variables como claves, siendo necesaria cuando el nombre de la propiedad se conoce en tiempo de ejecución.",
  },
  {
    categoria: "javascript",
    pregunta: "¿Qué es el Destructuring de objetos y arrays?",
    respuesta:
      "Es una expresión de JavaScript que permite desempaquetar valores de arrays o propiedades de objetos en variables individuales de forma rápida y limpia. En objetos se usa con llaves ({ nombre } = usuario) y en arrays con corchetes ([primero, segundo] = array).",
  },
];
