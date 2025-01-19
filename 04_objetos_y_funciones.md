# Fundamentos JavaScript

1.  [Tipos de Datos](01_tipos_de_datos.md)
1.  [Estructuras Control](02_estructuras_control.md)
1.  [Programacion Orientada a Objetos](03_poo.md)
1.  [Objetos y funciones del Lenguaje](04_objetos_y_funciones.md)
1.  [Ejercicios de Logica de Programacion](05_ejercicios_logica.md)
1.  [Programacion Asincrona](06_programacion_asincrona.md)
1.  [Nuevos Tipos y Caracteristicas](07_nuevos_tipos_y_caracteristicas.md)
1.  [This, Call, Apply y Bind](08_this_call_apply_bind.md)
1.  [JSON](09_json.md)
1.  [DOM](10_dom.md)

## Objetos y Funciones del Lenguaje en JavaScript

> -   [Objeto Console](04_objetos_y_funciones.md#objeto-console)
> -   [Objeto Date](04_objetos_y_funciones.md#objeto-date)
> -   [Objeto Math](04_objetos_y_funciones.md#objeto-math)
> -   [Operador de Cortocircuito](04_objetos_y_funciones.md#operador-de-cortocircuito)
> -   [Alert confirm y prompt](04_objetos_y_funciones.md#alert-confirm-y-prompt)
> -   [Expresiones Regulares](04_objetos_y_funciones.md#expresiones-regulares)
> -   [Funciones Anonimas Autoejecutables IIFE](04_objetos_y_funciones.md#funciones-anonimas-autoejecutables-iife)
> -   [Modulos import y export](04_objetos_y_funciones.md#modulos-import-y-export)

### **Objeto Console**

```
console.log(console)
console.error("Esto es un error")
console.warn("Esto es un aviso")
console.info("Esto es un msj informativo")
console.log("Resgistro de sucesos")
console.clear()

let nombre = "Jon", apellido = "Gomez", edad = 20;
console.log(nombre, apellido, edad)
console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`)
console.log(`Hola, mi nombre es %s %s y tengo %d años.`, nombre, apellido, edad)
console.log(window)
console.log(document)
console.dir(window)
console.dir(document)

console.groupCollapsed("Los cursos de @jonmircha en YT")
console.log("JavaScript")
console.log("Node.js")
console.log("PWAs")
console.log("Flexbox")
console.log("Diñeso y Programación Web")
console.groupEnd()

console.table(Object.entries(console).sort())

const vocales = ["a","e","i","o","u"];
console.table(vocales)

const perro = {
    nombre: "Bony",
    raza: "Boxer",
    color: "Cafe"
};
console.table(perro)

// Inicio de Tiempo
console.time("Cuanto tarda mi código");
const arreglo = Array(1000000);
for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i
};
console.timeEnd("Cuanto tarda mi código");
console.log(arreglo)
// Fin de Tiempo

for (let i = 0; i <= 10; i++) {
    console.count("codigo for")
    console.log(i)
};

let x = 3, y = 2, pruebaXY = "Se espera que X sea menor q Y";
console.assert(x < y, {x, y, pruebaXY})
```

### **Objeto Date**

El constructor `Date()` crea objetos Date. Cuando se llama como función, devuelve una cadena que representa la hora actual.

[Date() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)

```
console.log(Date());

let fecha = new Date()
console.log(fecha)
console.log(fecha.getDate())

// D L M Mi J V S
// 0 1 2 3  4 5 6
console.log(fecha.getDay())

// Ene Feb Mar Abr May Jun Jul Ago Sep Oct Nov Dic
// 0   1   2   3   4   5   6   7   8   9   10  11
console.log(fecha.getMonth())
console.log(fecha.getYear())
console.log(fecha.getFullYear())
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getMilliseconds())

console.log(fecha.toString())
console.log(fecha.toDateString())
console.log(fecha.toLocaleString())
console.log(fecha.toLocaleDateString())
console.log(fecha.toLocaleTimeString())
console.log(fecha.getTimezoneOffset())

console.log(fecha.getUTCDate())
console.log(fecha.getUTCHours())
console.log(fecha.getUTCMinutes())

// https://momentjs.com/
console.log(Date.now())

let cumpleF = new Date(1997, 5, 5) // año, mesIndex, dia
console.log(cumpleF)
```

### **Objeto Math**

```
console.log(Math)
console.log(Math.E)
console.log(Math.PI)
console.log((Math.PI).toFixed(4))

console.log(Math.abs(-7.8))
console.log(Math.ceil(6.4))
console.log(Math.floor(6.4))
console.log(Math.round(7.6))
console.log(Math.round(6.4))
console.log(Math.sqrt(121))
console.log(Math.pow(2,3))
console.log(Math.sign(7.8)) // -1 0 1
console.log(Math.sign(-7.8)) // -1 0 1
console.log(Math.sign(0)) // -1 0 1
console.log(Math.random())
console.log(Math.random()*100)
console.log(Math.round(Math.random()*100))
```

### **Operador de Cortocircuito**

**Cortocircuito OR** - cuando el valor de la izquierda
en la expresión siempre pueda validar a true, es el valor que se
cargará por defecto

**Cortocircuito AND** - cuando el valor de la izquierda
en la expresión siempre pueda validar a false, es el valor que se
cargará por defecto

```
// Recordar los valores thruty

// OR - ||

function saludar(nombre) {
    nombre = nombre || "Desconocid@"
    console.log(`Hola ${nombre}`)
};

saludar("Jonas")
saludar()

// El valor de la izq tiende a true, se imprime
console.log("cadena" || "Valor de la derecha")
console.log(19 || "Valor de la derecha")
console.log(true || "Valor de la derecha")
console.log([] || "Valor de la derecha")
console.log({} || "Valor de la derecha")

// El valor de la izq tiende a false, se imprime la der
console.log(false || "Valor de la derecha")
console.log(null || "Valor de la derecha")
console.log(undefined || "Valor de la derecha")
console.log("" || "Valor de la derecha")
console.log(-2 || "Valor de la derecha")
console.log(0 || "Valor de la derecha")

// AND - &&

console.log(false && "Valor de la derecha")
console.log(null && "Valor de la derecha")
console.log(undefined && "Valor de la derecha")
console.log("" && "Valor de la derecha")
console.log(0 && "Valor de la derecha")

console.log("cadena" && "Valor de la derecha")
console.log(19 && "Valor de la derecha")
console.log(true && "Valor de la derecha")
console.log([] && "Valor de la derecha")
console.log({} && "Valor de la derecha")
```

### **Alert confirm y prompt**

```
console.log(window)
window.alert("Hola, esto es una alerta")
window.confirm("Hola, esto es una confirmacion")
window.prompt("Hola, esto es un prompt")

alert("Hola, esto es una alerta")
confirm("Hola, esto es una confirmacion")
prompt("Hola, esto es un prompt")

let alerta = alert("Hola, esto es una alerta"),
    confirmacion = confirm("Hola, esto es una confirmacion"),
    aviso = prompt("Hola, esto es un prompt");

console.log(alerta)
console.log(confirmacion)
console.log(aviso)
console.log(typeof aviso)
```

### **Expresiones Regulares**

Son una secuencia de caracteres que forma un patrón de búsqueda, principalmente
utilizada para la búsqueda de patrones de cadenas de caracteres.

[Expresion Regular - Wikipedia](https://es.wikipedia.org/wiki/Expresion_regular)

[Expresiones Regulares - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions)

```
let cadena = "lorem ipsum dolor sit amet consectetur adipisicing elit.
Voluptatem fuga cupiditate dolores saepe, praesentium sit eaque
recusandae id sapiente similique, laudantium voluptatum
perferendis ea iure ad odio doloremque earum voluptate."

let expReg = new RegExp("lorem", "ig"); // palabra, banderas
let expReg2 = /\d/ig;
let expReg2 = /[0-9]/ig;
let expReg2 = /lorem{1}/ig;
let expReg2 = /lorem{1,2}/ig;
let expReg2 = /lorem{1,3}/ig;
let expReg2 = /lorem{1,}/ig;
let expReg2 = /lorem{2,}/ig;
let expReg2 = /lorem{3,}/ig;

// METODO TEST - true, false
console.log(expReg.test(cadena))
// METODO EXEC - array coincidencias
console.log(expReg.exec(cadena))

console.log(expReg2.test(cadena))
console.log(expReg2.exec(cadena))
```

### **Funciones Anonimas Autoejecutables IIFE**

```
(function() {
    console.log("Mi primer IIFE")
})();

(function() {
    console.log("Mi segunda IIFE")
})();

(function (d, w, c) {
    console.log("Mi quinta IIFE");
    console.log(d);
    console.log(w);
    console.log(c);
    c.log("Consolaa")
})(document, window, console);

// Formas de escribir IIFE

// Clásica
(function () {
    console.log('versión Clásica')
})();

// La Crockford - (JavaScript The Good Parts)
((function () {
    console.log('versión Crockford')
})());

// Unaria
+function () {
    console.log('versión Unaria')
}();

// Facebook
!function () {
    console.log('versión Facebook')
}()

// Forma con {}
// Nota: No es necesario el ; antes ni despúes.
// pero si dentro de los {}
{
    (function () {
    console.log("versión {}")
    });

    (function () {
    console.log("versión {}")
    })
}

// Forma Arrow Function
((g) => console.log(g))(globalThis);
```

### **Modulos import y export**

```
<!-- modulos.html -->
<!DOCTYPE html>
<html lang="es">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modulos en JavaScript</title>
    </head>
<body>
    <h1>Modulos en JavaScript</h1>
    <script src="js/modulos.js" type="module"></script>
    <script src="js/no-modulos.js" nomodule></script>
</body>
</html>
```

```
<!-- js\modulos.js --> // Formato +ES6
import saludar, { Saludar, PI, usuario } from "./constantes.js";
import { aritmetica as calculos } from "./aritmetica.js";

console.log("Archivo modulos.js")
console.log(PI, usuario)

// console.log(aritmetica.sumar(3,4))
// console.log(aritmetica.restar(3, 4))
console.log(calculos.sumar(3,4))
console.log(calculos.restar(3,4))

saludar()
let saludo = new Saludar()
saludo;
```

```
<!-- js\constantes.js -->
export const PI = Math.PI;

// Exporta lo que necesites
export let usuario = "Jonas";

// export default let password = "qwerty"; // Error
const password = "qwerty"; // Primero las declaras
// export default password; // Luego las exportas

const hello = () => console.log("Hola")

// Solo puedes tener un export default
export default function saludar() {
    console.log("Hola modulos +ES6 - default func saludar")
};

export class Saludar {
    constructor() {
        console.log("Hola modulos +ES6 - default class Saludar")
    };
};
```

```
<!-- js\aritmetica.js -->
function sumar(a, b) {
    return a + b;
};

function restar(a, b) {
    return a - b;
};

export const aritmetica = {
    sumar,
    restar,
};
```

```
<!-- js\no-modulos.js --> // Formato +ES5
console.log("Mi navegador no soporta Módulos +ES6")
```
