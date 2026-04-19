export const preguntasZustand = [
  {
    categoria: "zustand",
    pregunta: "¿Qué es Zustand y cómo se instala?",
    respuesta:
      "Zustand es una librería de manejo de estado global para React, liviana y simple. Se instala con 'npm install zustand' y permite crear stores que pueden ser consumidos desde cualquier componente sin necesidad de providers ni contextos.",
  },
  {
    categoria: "zustand",
    pregunta: "¿Cómo se crea un store básico en Zustand?",
    respuesta:
      "Se crea una variable que empieza con 'use' (porque es un hook) y se le asigna el valor de create importado de zustand. A la función que devuelve create se le pasa una callback que recibe set y retorna un objeto con los estados y sus valores iniciales. Ejemplo: export const useBearStore = create()((set) => ({ blackBears: 20 })).",
  },
  {
    categoria: "zustand",
    pregunta: "¿Para qué sirven get() y set() en Zustand?",
    respuesta:
      "set() sirve para actualizar un estado del store, funciona de manera similar al setState de React. Recibe una función que toma el estado actual y retorna el nuevo valor. get() sirve para leer el valor actual de una propiedad del store sin necesidad de suscribirse a él. Ejemplo: set((state) => ({ blackBears: state.blackBears + 1 })) y get().blackBears.",
  },
  {
    categoria: "zustand",
    pregunta: "¿Cómo se consume el store de Zustand en un componente?",
    respuesta:
      "Dentro del componente se crea una variable cuyo valor es el hook del store, ejecutándolo con una callback que recibe el estado y retorna solo la propiedad que se necesita. Ejemplo: const blackBears = useBearStore((state) => state.blackBears). De esta forma el componente solo se re-renderiza cuando esa propiedad específica cambia.",
  },
  {
    categoria: "zustand",
    pregunta: "¿Cuál es la buena práctica al suscribirse al store y por qué?",
    respuesta:
      "La buena práctica es suscribirse solo a la propiedad que se necesita: useBearStore((state) => state.blackBears). Si en cambio se desestructura todo el store en una sola línea (const { blackBears, polarBears } = useBearStore()), el componente queda suscripto al estado completo y se re-renderiza ante cualquier cambio, aunque no afecte las propiedades que usa.",
  },
  {
    categoria: "zustand",
    pregunta: "¿Para qué sirve useShallow en Zustand?",
    respuesta:
      "useShallow es un hook que se utiliza para evitar re-renders innecesarios cuando se necesitan múltiples propiedades del store. Compara superficialmente las propiedades del estado y solo re-renderiza el componente si alguna de ellas cambió. Se usa así: useBearStore(useShallow((state) => state.bears)).",
  },
  {
    categoria: "zustand",
    pregunta: "¿Qué son las propiedades computadas en Zustand?",
    respuesta:
      "Son propiedades que calculan un valor en base a otras propiedades del store usando get(). Su valor no se guarda, sino que se recalcula cada vez que las propiedades de las que depende cambian. Permiten centralizar la lógica de cálculo dentro del store, evitando repetirla en distintos componentes y haciendo el código más legible.",
  },
  {
    categoria: "zustand",
    pregunta:
      "¿Cómo se organiza el tipado del store con interfaces en Zustand?",
    respuesta:
      "Se recomienda separar las interfaces de propiedades (estado) de las interfaces de acciones. Luego se combinan al crear el store usando el operador & (intersección de tipos). Ejemplo: create<PersonState & Actions>(). Esta separación mejora la legibilidad, aunque puede volverse compleja en proyectos grandes.",
  },
  {
    categoria: "zustand",
    pregunta: "¿Qué es el middleware persist() y cómo funciona?",
    respuesta:
      "persist() es un middleware de Zustand que guarda automáticamente el estado en localStorage (por defecto). Cuando la página carga, verifica si hay un valor guardado y lo restaura; si no, usa el valor inicial. Recibe dos parámetros: la función del store (con set) y un objeto de configuración donde se define el name, que es la key con la que se guardará en el storage.",
  },
  {
    categoria: "zustand",
    pregunta: "¿Para qué sirve la opción partialize en persist()?",
    respuesta:
      "partialize es una propiedad del objeto de configuración de persist() que permite elegir qué partes del estado se guardan en el storage. Recibe una función que toma el estado y retorna un objeto solo con los estados que deben persistir. Todo estado que no esté incluido en ese objeto no se guardará en el localStorage.",
  },
  {
    categoria: "zustand",
    pregunta: "¿Qué es StateCreator y cuándo es recomendable usarlo?",
    respuesta:
      "StateCreator es un tipo de Zustand que se usa para tipar explícitamente la función del store (la que recibe set y get). Es recomendable usarlo cuando se quiere separar la lógica del store de la creación del hook, o cuando se trabaja con middlewares como persist(), ya que estos esperan recibir una función con ese tipo. No es obligatorio pero mejora la organización y el tipado del código.",
  },
];
