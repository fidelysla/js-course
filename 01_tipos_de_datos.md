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

## Tipos de Datos en JavaScript

### Primitivos

-   **string**

```
let nombre = "Jon";
let apellido = "Gomez";
let saludo = new String("Hola Mundo");
let saludo2 = `Hola, mi nombre es ${nombre} ${apellido}.`
let lorem = "      lorem ipsum, dolor sit amet      ";

console.log(
    nombre,
    apellido,
    saludo,
    saludo2,
    nombre.toUpperCase(),
    apellido.toLowerCase(),
    lorem.includes("sit"),
    lorem.trim(),
    lorem.split(" "),
);
```

-   **number**

```
let a = 2
let b = new Number(1)
let c = 7.19
let d = "5.6"

console.log(a, b);
console.log(c.toFixed(5));
console.log(parseInt(c));
console.log(parseFloat(c));
console.log(typeof c, typeof d);
console.log(a + b);
console.log(c + d);
console.log(c + parseInt(d));
console.log(c + parseFloat(d));
```

-   **boolean**

```
let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);
```

-   **null**

```
let nulo = null;
console.log(nulo);
```

-   **undefined**

```
let indefinida;
console.log(indefinida);
```

-   **NaN**

```
let noEsUnNumero = "hola" * 3.7;
console.log(noEsUnNumero);
```

### **Compuestos**:

_Se accede a la referencia del valor_.

-   **function(){}**

```
function nameFunction(params) {
    console.log("One");
    return 19;
    console.log("Two")
    return "Text";
};

const funcionExpresada = function () {
    console.log("Esto es una función expresada, es decir,
    una función que se le ha asignado como valor a una variable,
    si invocamos esta función antes de su definición,
    JS nos dirá: 'Cannot access 'funcionExpresada' before initialization' ");
};
```

-   **array = []**

```
const a = [];
const b = [1, true, "Hola", ["A", "B", "C", [1,2,3]]];

console.log(a)
console.log(b)
console.log(b.length)
console.log(b[2])
console.log(b[0])
console.log(b[3])
console.log(b[3][2])

const colores = ["rojo", "verde", "azul"]

colores.push("negro")
colores.pop()
```

-   **object = {}**

```
const fidel = {
    nombre: "Jon",
    apellido: "Gomez",
    edad: 30,
    pasatiempo: ["correr", "ejercicios", "estudiar"],
    soltero: false,
    contacto: {
        email: "jon@hotmail.com",
        movil: "237126413"
    },
    saludar: function() {
        console.log(`Hola :>`);
    },
    decirMiNombre: function() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido} y
        tengo ${this.edad} años y te puedes contactar conmigo a
        traves de mi correo: "${this.contacto.email}", Adios.`);
    },
};

console.log(fidel)
console.log(fidel["nombre"])
console.log(fidel.apellido)
console.log(fidel.pasatiempo)
console.log(fidel.contacto.movil)
fidel.saludar();
fidel.decirMiNombre()

console.log(Object.keys(fidel))
console.log(Object.values(fidel))
console.log(fidel.hasOwnProperty("nombre"))
console.log(fidel.hasOwnProperty("nacimiento"))
```

-   **class{}**

```

```
