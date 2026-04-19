export const preguntasAxios = [
  {
    categoria: "axios",
    pregunta: "¿Qué es Axios y por qué se prefiere sobre fetch nativo?",
    respuesta:
      "Axios es una biblioteca de JavaScript para realizar peticiones HTTP. Se prefiere sobre fetch porque tiene una sintaxis más simple y legible, maneja automáticamente la conversión de datos JSON (sin necesidad de llamar a .json()), y ofrece funcionalidades extra como interceptores, instancias personalizadas y mejor manejo de errores.",
  },
  {
    categoria: "axios",
    pregunta:
      "¿Cómo se agrega un token de autenticación en el encabezado de una solicitud Axios?",
    respuesta:
      "Se agrega un objeto con la propiedad headers dentro de la configuración de la solicitud. Dentro de headers se define Authorization con el valor 'Bearer ' concatenado con el token, y Content-Type con el valor 'application/json' para indicar el formato de los datos enviados.",
  },
  {
    categoria: "axios",
    pregunta:
      "¿Para qué sirve la propiedad Content-Type en el header de una solicitud?",
    respuesta:
      "Se utiliza para informarle al servidor en qué formato están los datos que se están enviando en la solicitud. Por ejemplo, al pasarle el valor 'application/json', el servidor sabe que debe interpretar el cuerpo de la solicitud como un objeto JSON.",
  },
  {
    categoria: "axios",
    pregunta: "¿Cómo se realiza el manejo de errores en Axios?",
    respuesta:
      "Se utiliza un bloque try/catch, generalmente dentro de un useEffect o una función asíncrona. En el bloque try se realiza la petición, y en el catch se captura el error para poder manejarlo, por ejemplo mostrando un mensaje al usuario o registrando el error en consola.",
  },
  {
    categoria: "axios",
    pregunta: "¿Para qué se utiliza axios.create() y qué ventaja ofrece?",
    respuesta:
      "axios.create() permite crear una instancia personalizada de Axios con una configuración predefinida, como la baseURL, headers comunes o params fijos (como una API key). La ventaja es que esa configuración se reutiliza automáticamente en todas las solicitudes que se hagan con esa instancia, evitando repetir código en cada llamada.",
  },
  {
    categoria: "axios",
    pregunta: "¿Qué propiedades se pueden configurar al usar axios.create()?",
    respuesta:
      "Se puede configurar baseURL (la URL base de la API que se concatenará con cada endpoint), headers (encabezados comunes como Authorization o Content-Type) y params (parámetros que se envían en todas las solicitudes, como una API key). Todo esto queda disponible para cualquier solicitud que se haga con esa instancia.",
  },
  {
    categoria: "axios",
    pregunta: "¿Qué es un interceptor en Axios y para qué se usa?",
    respuesta:
      "Un interceptor es una función que permite interceptar y modificar las solicitudes (request) o las respuestas (response) antes de que lleguen a su destino. Se usan para agregar automáticamente headers como el token de autenticación en todas las solicitudes, manejar errores de forma global, o transformar datos antes de procesarlos.",
  },
  {
    categoria: "axios",
    pregunta: "¿Para qué se utiliza interceptors.request y cómo funciona?",
    respuesta:
      "interceptors.request.use() intercepta todas las solicitudes salientes antes de que se envíen al servidor. Recibe una función callback que tiene acceso al objeto de configuración (config) de la solicitud. Desde ahí se puede, por ejemplo, leer el token del localStorage y agregarlo automáticamente al header Authorization de todas las solicitudes.",
  },
];
