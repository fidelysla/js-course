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

## JSON en JavaScript

JavaScript Object Notation o Notación de Objetos de JavaScript, es un formato ligero de intercambio de datos. Leerlo y escribirlo es simple para humanos, mientras que para las máquinas es fácil de interpretar y generar.
Todos los lenguajes de programación lo soportan.

-   [Introducción a JSON - JSON.org](https://www.json.org/json-es.html)
-   [JSON - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)
-   [Eloquent JavaScript](https://eloquentjavascript.net/)

```
const json = {
    cadena: "Jon",
    numero: 35,
    booleano: true,
    arreglo: ["correr", "programar", "cocinar"],
    objeto: {
        twitter: "@jonmircha",
        email: "jonmircha@gmail.com"
    },
    nulo: null
};

// console.log(json);
// console.log(JSON);

// *** JSON.parse ***
// Analiza una notación JSON y la convierte en un tipo de dato JS.

console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
console.log(JSON.parse('"Hola Mundo"'));
console.log(JSON.parse("null"));
// console.log(JSON.parse("undefined"));
console.log(JSON.parse('{ "x": 2, "y": 3 }'));

// *** JSON.stringify ***
// Convierte un tipo de dato JS a notación JSON.
console.log(JSON.stringify({}));
console.log(JSON.stringify([1, 2, 3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(19));
console.log(JSON.stringify("Hola Mundo"));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({ x: 2, y: 3 }));

console.log("*** Ejemplo JSON ***");
console.log(JSON.stringify(json));

console.log(JSON.parse('{"cadena": "Jon","numero": 35, "booleano": true,
"arreglo": ["correr","programar","cocinar"],"objeto": {"twitter": "@jonmircha",
"email": "jonmircha@gmail.com"},"nulo": null}'));
```
