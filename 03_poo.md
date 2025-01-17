# Fundamentos JavaScript

1.  [Tipos de Datos](01_tipos_de_datos.md)
1.  [Estructuras Control](02_estructuras_control.md)
1.  [Programación Orientada a Objetos](03_poo.md)
1.  [Objetos y funciones del Lenguaje](04_objetos_y_funciones.md)
1.  [Ejercicios de Lógica de Programación](05_ejercicios_logica.md)
1.  [Programación Asíncrona](06_programacion_asincrona.md)

## Programación Orientada a Objetos en JavaScript

> **POO**: JavaScript es un Lenguaje Orientado a Objetos basado en Prototipos.

> **PROTOTIPO**: Mecanismo por el cual un Objeto hereda atributos y métodos de un objeto padre.

> **CLASE**: Modelo a seguir. (Molde)
>
> -   _**Objetos**_: Es una instancia de una clase
>
> -   _**Atributos**_: Propiedades dentro de un Objeto (Variables)
>
> -   _**Métodos**_: Acciones que un objeto puede hacer (Funciones)

-   **Prototipos**

```
// Funcion Contructora donde asignamos los métodos al Prototipo,
// no a la función como tal.
function Animal(nombre, genero) {
    this.nombre = nombre
    this.genero = genero
};

// Metodos agregados al prototipo de la funcion constructora
Animal.prototype.sonar = function(){
    console.log("Estoy Vivo")
};

Animal.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre}`)
};

const snoopy = new Animal("Snoopy", "Macho")
const lolaBunny = new Animal("Lola Bunny", "Hembra");
```

-   **Herencia Prototípica**

```
function Perro(nombre, genero, tamanio) {
    this.super = Animal;
    this.super(nombre, genero);
    this.tamanio = tamanio
};

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

// Sobreescritura de metodos
Perro.prototype.sonar = function () {
    console.log("sonar: Soy un perro y mi sonido es ladrar!!")
};

Perro.prototype.ladrar = function () {
    console.log("ladrar: Guau Gauu")
};

const snoopy = new Perro("Snoopy", "Macho", "Mediano"),
    lolaBunny = new Animal("Lola Bunny", "Hembra", "Mediano");

console.log(snoopy);
console.log(lolaBunny)

snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();

lolaBunny.sonar();
lolaBunny.saludar();
```

-   **Clases y Herencia**

```
class Animal {
    constructor(nombre, genero){
        this.nombre = nombre
        this.genero = genero
    };
    sonar(){
        console.log("Hago sonidos pq estoy vivo")
    };
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`)
    };
};

class Perro extends Animal {
    constructor(nombre, genero, tamanio){
        super(nombre, genero)
        this.tamanio = tamanio
    };
    sonar(){
        console.log("sonar: Soy un perro y mi sonido es ladrar!!")
    };
    ladrar(){
        console.log("ladrar: Guau Gauu")
    };
};

const mimi = new Animal("Mimi", "Hembra"), scooby = new Perro("Scooby","Macho", "Gigante");

console.log(mimi)
mimi.saludar()
mimi.sonar()
console.log(scooby)
scooby.saludar()
scooby.sonar()
scooby.ladrar()
```

-   **Métodos Estáticos, Getters y Setters**

```
class Perro extends Animal {
constructor(nombre, genero, tamanio) {
    super(nombre, genero),
    this.tamanio = tamanio,
    this.raza = null;
};
sonar(){
    console.log("sonar: Soy un perro y mi sonido es ladrar!!")
};
ladrar(){
    console.log("ladrar: Guau Gauu")
};

// Un método estático se pueden ejecutar sin necesidad de instanciar la clase
static queEres(){
    console.log("Los perros somos animales mamíferos
    que pertenecemos a la familia de los caninos.
    Somos considerados los mejores amigos del hombre.")
};

// Los setters y getters son métodos especiales
// que nos permiten establecer y obtener los valores
// de atributos de nuestra clase
get getRaza(){
    return this.raza
};

set setRaza(raza){
    this.raza = raza
};
};

Perro.queEres();

const mimi = new Animal("Mimi", "Hembra"), scooby = new Perro("Scooby", "Macho", "Gigante");

console.log(scooby)
console.log(scooby.getRaza);
scooby.setRaza = "Grán Danés";
console.log(scooby.getRaza);
```
