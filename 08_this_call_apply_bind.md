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

## This, Call, Apply y Bind

### **This**

> En JavaScript, `this` es una palabra clave que hace referencia al contexto de ejecución actual, es decir, a quién pertenece el código que se está ejecutando. Su valor varía dependiendo de cómo y dónde se invoque la función. Por ejemplo, en una función normal, `this` puede referirse al objeto global (`window` en navegadores); en un método de un objeto, `this` apunta al objeto que lo contiene. En funciones flecha, `this` se enlaza al contexto donde la función fue definida, no donde se ejecuta.

```javascript
// console.log(this);
// console.log(global);
// console.log(window);
// console.log(this === window); // true

this.nombre = 'Contexto Global';

function imprimir() {
    console.log(this.nombre);
}

imprimir();

const obj = {
    nombre: 'Contexto Objeto',
    imprimir() {
        console.log(this.nombre);
    },
};

obj.imprimir();

const obj2 = {
    nombre: 'Contexto Objeto 2',
    imprimir,
};

obj2.imprimir();

const obj3 = {
    nombre: 'Contexto del Objeto 3',
    // No es recomedado usar arrow function
    // La arrow tiene el contexto del padre
    imprimir: () => {
        console.log(this.nombre); // Contexto Global
    },
};

obj3.imprimir();

function Persona(nombre) {
    // this.nombre = nombre

    // return console.log(this.nombre);

    const that = this;
    that.nombre = nombre;

    // Esta funcion nos devuelve el scope global, ya que la function es anonima
    // return function() {
    //     console.log(this.nombre, 22);
    // };

    // return () => console.log(this.nombre, 77);

    return function () {
        console.log(that.nombre, 'that');
    };
}

let jon = new Persona('Jon');

jon();
```

### **Call y Apply**

> El método `call` permite invocar una función con un valor específico para `this` y pasarle argumentos individualmente. Es útil para reutilizar funciones en diferentes contextos.
> `apply` es similar a `call`, pero en lugar de pasar los argumentos uno por uno, los acepta en forma de un array o un objeto similar a un array. Esto es práctico cuando ya tienes los argumentos agrupados en un arreglo

```javascript
// console.log(this);

this.lugar = 'Contexto Global';

function saludar(saludo, who) {
    console.log(`${saludo} ${who} desde el ${this.lugar}`);
}

saludar('Hola', 'kEnAi');

const obj = {
    lugar: 'Contexto Objeto',
};

saludar.call(obj, 'Hola', 'Jon');
saludar.call(null, 'Hola', 'Jon');
saludar.call(this, 'Hola', 'Jon');

saludar.apply(obj, ['Adios', 'Mircha']);
saludar.apply(null, ['Adios', 'Mircha']);
saludar.apply(this, ['Adios', 'Mircha']);
```

### **Bind**

> El método `bind` no ejecuta la función de inmediato, sino que crea una nueva función con el valor de this predefinido. Esto es útil cuando necesitas pasar una función como callback manteniendo un contexto específico.

```javascript
this.nombre = 'window';

const persona = {
    nombre: 'Persona1',
    saludar: function () {
        console.log(`Hola ${this.nombre}`);
    },
};

// persona.saludar()

const otraPersona = {
    saludar: persona.saludar.bind(this),
};

otraPersona.saludar();
```

<hr>

> _En resumen, `call` y `apply` ejecutan la función directamente, mientras que `bind` crea una nueva función. Y `this` es el corazón que define el contexto en cada caso._
