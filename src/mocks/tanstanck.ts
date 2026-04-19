export const preguntasTanstackQuery = [
  {
    categoria: "tanstack-query",
    pregunta: "¿Qué es TanStack Query y para qué se usa?",
    respuesta:
      "Es una biblioteca de JavaScript que permite manejar y optimizar de manera eficiente las peticiones HTTP en una aplicación. Gestiona automáticamente el caché, los estados de carga y error, y los re-fetches. Se puede utilizar con React, Vue, Angular, entre otros frameworks.",
  },
  {
    categoria: "tanstack-query",
    pregunta:
      "¿Cuáles son los pasos para configurar TanStack Query en un proyecto React?",
    respuesta:
      "Primero se instala con 'npm i @tanstack/react-query'. Luego en main.tsx se importan QueryClient y QueryClientProvider desde '@tanstack/react-query', se crea una instancia con 'const queryClient = new QueryClient()' y se envuelve el componente App con QueryClientProvider pasándole la prop client con esa instancia.",
  },
  {
    categoria: "tanstack-query",
    pregunta: "¿Qué es useQuery y para qué tipo de solicitudes se usa?",
    respuesta:
      "useQuery es un hook de TanStack Query que permite manejar solicitudes de tipo GET. Por defecto se ejecuta automáticamente cuando el componente se monta. Al ejecutarlo se le pasa un objeto con dos propiedades obligatorias: queryKey (identificador de la query) y queryFn (la función que realiza la petición).",
  },
  {
    categoria: "tanstack-query",
    pregunta: "¿Qué es queryKey y cuál es su función en useQuery?",
    respuesta:
      "queryKey es un array que recibe un string que identifica de forma única a la query. TanStack Query lo utiliza para guardar la data en caché, identificar qué query ejecutar y saber cuándo hacer un refetch. Si la queryKey cambia, la query se vuelve a ejecutar automáticamente.",
  },
  {
    categoria: "tanstack-query",
    pregunta: "¿Cómo se pasa la queryFn con y sin parámetros?",
    respuesta:
      "Si la función del servicio no necesita parámetros, se pasa directamente su referencia: queryFn: obtenerLocalidades. Si necesita parámetros, se envuelve en una callback para poder pasárselos: queryFn: () => obtenerDatosPaciente({ dni }). Nunca se la debe ejecutar directamente (con paréntesis) fuera de una callback si recibe parámetros.",
  },
  {
    categoria: "tanstack-query",
    pregunta: "¿Qué propiedades se pueden obtener al desestructurar useQuery?",
    respuesta:
      "Se puede obtener: data (la respuesta del backend), isLoading (booleano que es true mientras carga), isError (booleano que es true si la query falló), error (el mensaje de error), refetch (función para volver a ejecutar la query manualmente) e isFetching (booleano que indica si hay una petición en curso, incluso en re-fetches en segundo plano).",
  },
  {
    categoria: "tanstack-query",
    pregunta: "¿Para qué sirve la propiedad enabled en useQuery?",
    respuesta:
      "enabled recibe un booleano que controla si la query se ejecuta automáticamente o no. Cuando es true la query se lanza, cuando es false no. Es muy útil cuando necesitás que cierta información esté disponible antes de ejecutar la petición, por ejemplo, esperar a tener el DNI de un paciente antes de llamar al endpoint.",
  },
  {
    categoria: "tanstack-query",
    pregunta: "¿Para qué sirve refetchOnWindowFocus en useQuery?",
    respuesta:
      "refetchOnWindowFocus es un booleano que controla si la query se vuelve a ejecutar automáticamente cuando el usuario vuelve a la pestaña del navegador. Por defecto está en true. Si se pasa false, la query solo se ejecutará cuando se use enabled, refetch manual o refetchInterval.",
  },
  {
    categoria: "tanstack-query",
    pregunta: "¿Para qué sirve refetchInterval en useQuery?",
    respuesta:
      "refetchInterval recibe un número en milisegundos e indica cada cuánto tiempo se debe volver a ejecutar la query automáticamente. Es útil para mantener la data siempre actualizada sin que el usuario tenga que hacer ninguna acción, como en dashboards con datos en tiempo real.",
  },
  {
    categoria: "tanstack-query",
    pregunta: "¿Para qué sirve refetchOnMount en useQuery?",
    respuesta:
      "refetchOnMount controla si la query debe volver a ejecutarse cada vez que el componente se monta (por ejemplo, al navegar entre vistas). Si se le pasa false, la query solo se ejecutará según enabled, refetch manual o refetchInterval, sin refrescarse al montar el componente.",
  },
  {
    categoria: "tanstack-query",
    pregunta: "¿Para qué sirve initialData en useQuery?",
    respuesta:
      "initialData permite definir un valor inicial para la data antes de que la query se resuelva. Esto evita que data sea undefined mientras carga, lo cual es útil para mostrar contenido placeholder o valores por defecto en la UI. Una vez que la query finaliza, ese valor se reemplaza con la respuesta real del backend.",
  },
  {
    categoria: "tanstack-query",
    pregunta:
      "¿Cómo maneja TanStack Query los errores y qué propiedades ofrece?",
    respuesta:
      "Por defecto, cuando una solicitud falla, TanStack Query reintenta ejecutarla 2 o 3 veces antes de lanzar el error. Se puede controlar con retry (número de reintentos) y retryDelay (milisegundos entre reintentos). Para manejar el error en la UI se usan isError (booleano) y error (objeto con el mensaje y status del error).",
  },
  {
    categoria: "tanstack-query",
    pregunta: "¿Qué es useMutation y en qué se diferencia de useQuery?",
    respuesta:
      "useMutation es un hook para operaciones que modifican datos en el backend: crear, editar, eliminar, enviar emails, procesar pagos, etc. A diferencia de useQuery, las mutaciones no se ejecutan al montar el componente, sino únicamente cuando se llama manualmente a la función mutate, por ejemplo dentro de un evento como un click.",
  },
  {
    categoria: "tanstack-query",
    pregunta: "¿Cómo se usa useMutation y qué es mutate?",
    respuesta:
      "A useMutation se le pasa un objeto con la propiedad obligatoria mutationFn (la función que llama al endpoint). Al desestructurarlo se obtiene mutate, que es la función que hay que llamar para ejecutar la mutación. Se puede renombrar usando dos puntos al desestructurar, lo cual es útil cuando hay varios useMutation en el mismo componente.",
  },
  {
    categoria: "tanstack-query",
    pregunta:
      "¿Qué propiedades se pueden obtener al desestructurar useMutation?",
    respuesta:
      "Se puede obtener: mutate (función para ejecutar la mutación), data (respuesta del backend si fue exitosa, sino undefined), isError (booleano en true si falló), isSuccess (booleano en true si fue exitosa), status (con estados: idle, pending, error, success), error (objeto con message y status del error) y reset (función que vuelve la mutación a su estado inicial).",
  },
  {
    categoria: "tanstack-query",
    pregunta: "¿Qué son onSuccess, onError y onMutate en useMutation?",
    respuesta:
      "Son callbacks que se ejecutan en distintos momentos del ciclo de vida de la mutación. onSuccess se ejecuta cuando la mutación finaliza con éxito (ideal para guardar data en el store o redirigir al usuario). onError se ejecuta cuando falla (ideal para mostrar alertas). onMutate se ejecuta justo antes de enviar la petición al backend, siendo útil para activar un loader que luego se desactiva en onSuccess u onError.",
  },
  {
    categoria: "tanstack-query",
    pregunta: "¿Para qué sirve mutationKey en useMutation?",
    respuesta:
      "mutationKey es un array con un string que identifica de forma única a la mutación dentro de la aplicación. Permite referenciar o acceder a esa mutación desde otras partes del código, por ejemplo para saber su estado global o cancelarla. No es obligatorio pero es útil en aplicaciones con varias mutaciones.",
  },
  {
    categoria: "tanstack-query",
    pregunta:
      "¿Qué es el estado status en useMutation y cuáles son sus valores?",
    respuesta:
      "status es una propiedad de useMutation que indica en qué etapa se encuentra la mutación. Tiene cuatro valores posibles: idle (estado inicial, antes de ejecutarse), pending (ejecutándose en este momento), error (el último intento devolvió un error) y success (se completó con éxito). Es útil para mostrar distintos estados en la UI sin necesidad de múltiples booleanos.",
  },
];
