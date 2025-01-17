# Fundamentos JavaScript

1.  [Tipos de Datos](01_tipos_de_datos.md)
1.  [Estructuras Control](02_estructuras_control.md)
1.  [Programación Orientada a Objetos](03_poo.md)
1.  [Objetos y funciones del Lenguaje](04_objetos_y_funciones.md)
1.  [Ejercicios de Lógica de Programación](05_ejercicios_logica.md)
1.  [Programación Asíncrona](06_programacion_asincrona.md)

## Estructuras de Control en JavaScript

-   **Tipos de Operadores**

```
Aritmeticos: + - * / % ()

Relacionales: >, <, >=, <=, ==, ===, !=, !==

Logicos: ! - Not, || - Or, && - And
```

-   **Condicionales**

```
let edad = 26
if (edad >= 18) {
    console.log("Mayor de Edad")
} else if (edad <= 17) {
    console.log("Menor de Edad")
} else {
    console.log("*")
};

let eresMayor = (edad >= 18)
    ? "Mayor de Edad"
    : "Menor de Edad";

switch (key) {
case value:
    console.log("*")
    break;
default:
    console.log("*")
    break;
};
```

-   **Ciclos (loops)**

```
while (condition) {
    console.log("*")
};

do {
    console.log("*")
} while (condition);

for (let index = 0; index < array.length; index++) {
    console.log(array[index])
};

// FOR IN
let triangle = { a: 1, b: 2, c: 3 };
for (const key in object=triangle) {
    console.log(`Key: ${key}, Value: ${objeto[key]}`)
};

// FOR OF
let iterable = [10, 20, 30];
for (const i of object=iterable) {
    console.log(i)
};

array = [1,2,3]
array.forEach((currentValue, index) => {
    console.log(`Indice: ${index} - Valor: ${currentValue}`)
});
```

-   **Manejo de Errores**

```
try {
    noExiste;
    console.log("*")
} catch (error) {
    console.log(error)
} finally {
    console.log("*")
};
```

-   **Break & Continue**

```
const numeros = [1,2,3,4,5,6,7,8,9,0]

for (let index=0; index < numeros.length; index++) {
    if (index === 5) {
        break;
    };
    console.log(numeros[index]);
};

for (let index=0; index < numeros.length; index++) {
    if (index === 5) {
        continue;
    }
    console.log(numeros[index]);
};
```

-   **Destructuracion**

```
const persona = {
nombre: "Jon",
apellido: "Gomez",
edad: 26,
};

let {nombre, edad, apellido} = persona;
```

-   **Objetos Literales**

```
let nombre = "kEnAi", edad = 7;

const perro = {
    nombre,
    edad,
    raza: "Callejero",
    ladrar: function() {
        console.log("guauu guauu!!")
    }
};

console.log(perro);
perro.ladrar();
```

-   **Parámetros REST & Operador Spread**

```
// Parámetros Rest
function sumar(a, b, ...c ) {
    let resultado = a + b;
    c.forEach( function(n) {
        resultado += n
    });
    return resultado
};

// Sintaxis Spread
const arr1 = [1, 2, 3, 4, 5], arr2 = [6, 7, 8, 9, 0];
const arr3 = [...arr1, ...arr2];
```

-   **Arrow Functions**

```
const saludar = () => {
    console.log(`Hola`)
};

const saludar2 = nombre => console.log(`Hola ${nombre}`);

const sumar = (a, b) => a + b;

const perro = {
    nombre: "Kenai";

    ladrar: function() {
        console.log(this) // {nombre: 'Kenai', ladrar: ƒ}
    };

    ladrar: () => {
        console.log(`${this}`) // [object Window]
    };

    ladrar() {
        console.log(this)
    };
};
perro.ladrar();
```
