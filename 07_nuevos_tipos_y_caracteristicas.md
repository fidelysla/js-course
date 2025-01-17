# Fundamentos JavaScript

1.  [Tipos de Datos](01_tipos_de_datos.md)
1.  [Estructuras Control](02_estructuras_control.md)
1.  [Programacion Orientada a Objetos](03_poo.md)
1.  [Objetos y funciones del Lenguaje](04_objetos_y_funciones.md)
1.  [Ejercicios de Logica de Programación](05_ejercicios_logica.md)
1.  [Programacion Asincrona](06_programacion_asincrona.md)
1.  [Nuevos Tipos y Caracteristicas](07_nuevos_tipos_y_caracteristicas.md)
1.  [This, Call, Apply y Bind](08_this_call_apply_bind.md)
1.  [JSON](09_json.md)
1.  [DOM](10_dom.md)

## Nuevos Tipos y Características

> -   Symbols
> -   Sets
> -   Maps
> -   WeakSets & WeakMaps
> -   Iterables & Iterators
> -   Generators
> -   Proxies
> -   Propiedades Dinámicas de los Objetos

-   **Symbols**

> Un símbolo (Symbol) es un tipo de dato primitivo que representa
> un identificador único. Se utilizan para crear propiedades de objetos únicas, para
> nombrar eventos de forma única, y para otros propósitos que requieren identificadores únicos.
> Los símbolos se crean utilizando la función Symbol() o el método Symbol.for().
>
> Los símbolos tienen las siguientes características:
>
> -   Son únicos: no hay dos símbolos iguales.
> -   Son inmutables: no se pueden modificar una vez creados.
> -   No son enumerables: no aparecen en iteraciones con for...in.

```
let id = Symbol("id");
let id2 = Symbol("id2");

console.log(id === id2);
console.log(id,id2);
console.log(typeof id, typeof id2);

// Crear un nuevo Símbolo primitivo
const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona = {
    [NOMBRE]: "Jon",
    edad: 35
};

console.log(persona);

persona.NOMBRE = "Jonathan M"

console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);

persona[SALUDAR] = function () {
    console.log("Hola");
};

console.log(persona);
persona[SALUDAR]();

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

// Listar las propiedades privadas Symbol
console.log(Object.getOwnPropertySymbols(persona))
```

-   **Sets**

```
    // Estructura similar a un array pero de datos unicos

    const set = new Set([1,2,3,3,4,5,true, false, false, {}, {}, "hola", "HOla" ])

    console.log(set);
    console.log(set.size);

    // agregar valores
    const set2 = new Set()
    set2.add(1)
    set2.add(2)
    set2.add(2)
    set2.add(3)
    set2.add(true)
    set2.add(false)
    set2.add(true)
    set2.add({})

    console.log(set2);
    console.log(set2.size);

    // Como recorrer cada elemento
    console.log("Recorriendo set 1");

    for (item of set) {
        console.log(item);
    };

    console.log("Recorriendo set 2");
    set2.forEach(item => console.log(item))

    // Aceder a las posiciones
    console.log(set[0]); // undefined
    let arr = Array.from(set)
    console.log(arr);
    console.log(arr[0]); // 1
    console.log(arr[9]); // hola

    // Eliminar valores de sets
    console.log(set);
    set.delete("HOla")
    console.log(set);

    // Comprueba si un valor existe
    console.log(set.has("hola"));
    console.log(set.has(19));

    // Limpiar un set
    set2.clear()
    console.log(set2); // Set(0) {size: 0}
```

-   **Maps**

```
    // Objetos para almacenar conjunto de valores

    const mapa = new Map();

    mapa.set("nombre", "Fidel")
    mapa.set("apellido", "Martinez")
    mapa.set("edad", 26)

    console.log(mapa);
    console.log(mapa.size); //3

    console.log(mapa.has("correo")); //false
    console.log(mapa.has("nombre")); //true
    console.log(mapa.get("nombre")); // Fidel

    mapa.set("nombre", "Carlos")
    console.log(mapa.get("nombre")) // Carlos

    // Eliminar elementos de un mapa
    mapa.delete("apellido")

    mapa.set(19, "diecinueve")
    mapa.set(false, "falso")
    mapa.set({}, {})

    console.log(mapa);

    // Como recorrer un mapa
    for (let [key, value] of mapa) {
        console.log(`Llave: ${key}, Valor: ${value}`);
    };

    const mapa2 = new Map([
        ["nombre", "kEnAi"],
        ["edad", 7],
        ["animal", "perro"],
        [null, "nulo"]
    ]);

    console.log(mapa2);

    // Destructuracion
    const llavesmapa2 = [...mapa2.keys()]
    const valoresmapa2 = [...mapa2.values()]

    console.log(llavesmapa2);
    console.log(valoresmapa2);
```

-   **WeakSets & WeakMaps**

```
// Solo almacena referencias debiles (es decir, objetos)
// Las llaves deben ser debiles
// No son elementos iterables
// No se puede utilizar el metodo clear() ni size() en ambos casos
// Los WeakSets permite add, has, delete
// Los WeakMaps permiten set, get, has, delete

// const ws = new WeakSet([1, 2, 3, 3, 4, 5, true, false, false, {}, {}, "hola", "HOla"])
// TypeError: Invalid value used in weakset

    // WEAKSETS
    const ws = new WeakSet()

    let v1 = {"valor1": 1}
    let v2 = {"valor1": 2}
    let v3 = {"valor1": 3}

    ws.add(v1)
    ws.add(v2)

    console.log(ws);

    console.log(ws.has(v1));
    console.log(ws.has(v3));

    ws.delete(v2);
    console.log(ws);

    ws.add(v2)
    ws.add(v3)

    console.log(ws);

    setInterval(() => {
        console.log(ws);
    }, 1000);

    setTimeout(() => {
        v1 = null
        v2 = null
        v3 = null
    }, 5000);

    // WEAKMAPS

    // const wm = new WeakMap([
    //     ["nombre", "kEnAi"],
    //     ["edad", 7],
    //     ["animal", "perro"],
    //     [null, "nulo"]
    // ])
    // TypeError: Invalid value used as weak map key

    const wm = new WeakMap();

    let llave1 = {}
    let llave2 = {}
    let llave3 = {}

    wm.set(llave1, 1)
    wm.set(llave2, 2)

    console.log(wm);
    console.log(wm.has(llave1));
    console.log(wm.has(llave3));

    console.log(wm.get(llave1));
    console.log(wm.get(llave2));
    console.log(wm.get(llave3));

    wm.delete(llave2)
    console.log(wm);

    wm.set(llave2, 2)
    wm.set(llave3, 3)
    console.log(wm);

    setInterval(() => {
        console.log(wm);
    }, 1000);

    setTimeout(() => {
        llave1 = null
        llave2 = null
        llave3 = null
    }, 5000);
```

-   **Iterables & Iterators**

```
    // Tipos de Iterables
    const iterable = [1,2,3,4,5]
    // const iterable = "Hola Mundo"
    // const iterable = new Set([1,2,3,3,4,5,6,6])
    // const iterable = new Map([["nombre", "Jon"], ["edad", 20]])

    // Accedemos al iterador del iterable
    const iterador = iterable[Symbol.iterator]()

    console.log(iterable);
    console.log(iterador);

    // console.log(iterador.next());
    // console.log(iterador.next());

    let Inext = iterador.next()

    while (!Inext.done) {
        console.log(Inext.value);
        Inext = iterador.next()
    };
```

-   **Generators**

```
    // Nueva funcion que nos permite trabajar con los iteradores

    function* iterable () {
        yield "Hola"
        console.log("Hola consola");
        yield "Hola 2"
        console.log("Seguimos con más instrucciones del codigo");
        yield "Hola 3"
        yield "Hola 4"
    };

    let iterador = iterable()
    console.log(iterador.next());
    console.log(iterador.next());

    for (let y of iterador) {
        console.log(y);
    };

    const arr = [...iterable()]
    console.log(arr);

    // Creamos una funcion
    function cuadrado(valor) {
        setTimeout(() => {
            console.log({valor, resultado: valor*valor})
        }, Math.random()*1000);
        return {valor, resultado: valor*valor};
    };


    function* generador() {
        console.log("Inicia Generator");
        yield cuadrado(0)
        yield cuadrado(1)
        yield cuadrado(2)
        yield cuadrado(3)
        yield cuadrado(4)
        yield cuadrado(5)
        yield cuadrado(6)
        console.log("Termina Generator");
    };

    let gen = generador()

    for (let y of gen) {
        console.log(y);
        // y
    };
```

-   **Proxies**

```
    const persona = {
        nombre: "",
        apellido: "",
        edad: 0
    };

    const manejador = {
        set(obj, prop, valor){
            // Evitar que se cree nuevas propiedades
            if (Object.keys(obj).indexOf(prop) === -1) {
                return console.error(`La propiedad ${prop} no existe en el objeto persona`);
            };
            if (
                (prop === "nombre" || prop === "apellido")
                && !(/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/g.test(valor))
            ){
                return console.error(`La propiedad "${prop}" sólo acepta letras y espacios en blanco`);
            } else {

            }
            obj[prop] = valor
        }
    };

    const jon = new Proxy(persona,manejador)

    // jon.nombre = "Jon";
    jon.nombre = prompt("Nombre: ")

    // jon.apellido = "Mircha"
    jon.apellido = prompt("Apellido: ")

    // jon.edad = "35"
    jon.edad = prompt("Edad: ")

    jon.twitter = "@jonmircha"

    console.log(jon);
    console.log(persona);
```

-   **Propiedades Dinámicas de los Objetos**

```
    // const objUsuarios = {};

    let aleatorio = Math.round(Math.random() * 100 + 5)

    const objUsuarios = {
        propiedad: "Valor",
        [`id_${aleatorio}`]: "Valor Aleatorio"
    };

    console.log(objUsuarios);

    const usuarios = ["Jon", "Irma", "Miguel", "Kala", "kEnAi"];

    // objUsuarios[`id_${index}`] = usuario

    usuarios.forEach((u, i) => {
        objUsuarios[`id_${i}`] = u
    } );

    console.log(objUsuarios);
```
