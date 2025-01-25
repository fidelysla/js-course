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

## Ejercicios de Logica de Programacion

> -   [Ejercicios Parte 1](05_ejercicios_logica.md#ejercicios-parte-1)
> -   [Ejercicios Parte 2](05_ejercicios_logica.md#ejercicios-parte-2)
> -   [Ejercicios Parte 3](05_ejercicios_logica.md#ejercicios-parte-3)
> -   [Ejercicios Parte 4](05_ejercicios_logica.md#ejercicios-parte-4)
> -   [Ejercicios Parte 5](05_ejercicios_logica.md#ejercicios-parte-5)
> -   [Ejercicios Parte 6](05_ejercicios_logica.md#ejercicios-parte-6)
> -   [Ejercicios Parte 7](05_ejercicios_logica.md#ejercicios-parte-7)
> -   [Ejercicios Parte 8](05_ejercicios_logica.md#ejercicios-parte-8)
> -   [Ejercicios Parte 9](05_ejercicios_logica.md#ejercicios-parte-9)

<br>

### **Ejercicios Parte 1**

> 1.  Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

```javascript
const contarCadena = (input = '') =>
    !input
        ? console.warn('Cadena vacia')
        : console.info(`La cadena tiene ${input.length} caracteres`);

contarCadena(); // Cadena vacia
contarCadena('Hola Mundo'); // La cadena tiene 10 caracteres
```

> 2. Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

```javascript
const recortarCadena = (cadena = '', numero = undefined) =>
    !cadena
        ? console.warn('Cadena vacia')
        : numero === undefined || isNaN(numero)
        ? console.warn('No ingresaste la longitud para recortar texto')
        : console.info(
              `La cadena queda asi: ${cadena.toString().slice(0, numero)}`
          );

recortarCadena(222, '2'); // La cadena queda asi: 22
recortarCadena('Hola Mundo', 4); // La cadena queda asi: Hola
recortarCadena('Hola Mundo'); // No ingresaste la longitud para recortar texto
recortarCadena('', 4); // Cadena vacia
```

> 3. Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

```javascript
const separarTexto = (texto = '', sep = undefined) =>
    !texto
        ? console.warn('La cadena esta vacia')
        : sep === undefined
        ? console.warn('Ingresa un separador valido')
        : console.log(texto.toString().split(sep));

separarTexto('Ene,Feb,Mar,Abr', ','); // ['Ene', 'Feb', 'Mar', 'Abr']
separarTexto('', ' '); // La cadena esta vacia
separarTexto('hola que tal'); // Ingresa un separador valido
separarTexto([1234, 5678], ','); // ['1234', '5678']
separarTexto('hola que tal', ' '); // ['hola', 'que', 'tal']
separarTexto(1234, ''); // ['1', '2', '3', '4']
separarTexto(12345, '3'); // ['12', '45']
```

> 4. Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

```javascript
const multiTexto = (texto = '', each = undefined) =>
    !texto
        ? console.warn('La cadena esta vacia')
        : each === undefined || typeof each !== 'number'
        ? console.warn('Defina un número valido de veces que se repita')
        : each === 0
        ? console.error('El número no puede ser 0')
        : Math.sign(each) === -1
        ? console.error('El número no puede ser negativo')
        : console.info(`${texto + ' '}`.repeat(each));

multiTexto(''); // La cadena esta vacia
multiTexto(' '); // Defina un número valido de veces que se repita
multiTexto('Hola Mundo', 0); // El número no puede ser 0
multiTexto('Hola Mundo', 'a'); // Defina un número valido de veces que se repita
multiTexto('Hola', -1); // El número no puede ser negativo
multiTexto('Hola Mundo', 3); // Hola Mundo Hola Mundo Hola Mundo
```

### **Ejercicios Parte 2**

> 5. Programa una función que invierta las palabras de una cadena de texto, <br> pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

```javascript
const invertir = (texto = '') => {
    const fun = (text) => {
        let invertido = '';
        for (let i = text.length - 1; i >= 0; i--) {
            invertido += text[i];
        }
        return invertido;
    };

    !texto
        ? console.warn('Cadena vacia')
        : typeof texto === 'number'
        ? console.log(fun(texto.toString()))
        : console.log(fun(texto));
};

invertir(''); // Cadena vacia
invertir('Hola Mundo'); // odnuM aloH
invertir('Hola Pedrito'); // otirdeP aloH
invertir('¿Por qué?'); // ?éuq roP¿
invertir(12345); // 54321
invertir(12345 - 123); // 22221
```

> 6. Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

```javascript
const countW = (parr = '', word = undefined) => {
    //Function
    const find = (text, re) => {
        const r = new RegExp(re, 'gi');
        try {
            return text.match(r).length;
        } catch (error) {
            return 'No se encontro la palabra';
        }
    };

    // Control
    !parr
        ? console.warn('Cadena vacia')
        : word === undefined || word === ''
        ? console.warn('Ingresa la palabra a contar.')
        : typeof parr === 'number' || typeof parr === 'object'
        ? console.log(find(parr.toString(), word))
        : console.log(find(parr, word));
};

countW(); // Cadena vacia
countW(32345, 3); // 2
countW(['82345', '5678'], '8'); // 2
countW(['82345', '56558'], '5'); // 4
countW('IS This is a string.', 'is'); // 3
countW('', ''); // Cadena vacia
countW('Hola', ''); // Ingresa la palabra a contar.
countW('Hola', ' '); // No se encontro la palabra
countW(' ', ' '); // 1
countW('hola mundo adios mundo', 'mundo'); // 2
```

> 7.  Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

```javascript
const palindromo = (w) => {
    // Funcion para invertir la palabra y unirla
    let word = w.toLowerCase();
    const invertAndJoin = (word) => {
        let invertido = ''; // palabra invetida
        for (let i = word.length - 1; i >= 0; i--) {
            invertido += word[i];
        }
        let abc = invertido.split(''); // hacer un array
        let x = [];
        for (const i of abc) {
            if (i !== ' ') {
                x.push(i);
            }
        }
        return x.join('');
    };

    // Funcion para unir la palabra original
    const joinWord = (word) => {
        let abc = word.split(''); // hacer un array
        let z = [];
        for (const i of abc) {
            if (i !== ' ') {
                z.push(i);
            }
        }
        return z.join('');
    };
    return invertAndJoin(word) === joinWord(word);
};

console.log(palindromo('Salas'));
console.log(palindromo('anilina'));
console.log(palindromo('reconocer'));
console.log(palindromo('dabale arroz a la zorra el abad'));
console.log(palindromo('anita lava la tina'));
```

> 8.  Programa una función que elimine cierto patrón de caracteres de un texto dado,<br> pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.

```javascript
const deletePat = (texto = '', pattern = '') =>
    !texto
        ? 'Cadena vacia'
        : !pattern
        ? 'Ingresa el patrón a eliminar.'
        : typeof texto === 'number'
        ? texto.toString()
        : texto.replace(new RegExp(pattern, 'gi'), '');

console.log(deletePat('', ' '));
console.log(deletePat(' ', ''));
console.log(deletePat('xyz1, xyz2, xyz3, xyz4 y xyz5', 'xyz'));
console.log(deletePat('102030405', 0));
console.log(deletePat(102030405, '0'));
console.log(deletePat('12030405,', '0'));
```

### **Ejercicios Parte 3**

> 9. Programa una función que obtenga un numero aleatorio entre 501 y 600.

```javascript
const numbBetween = (minor = 0, mayor = 0) => {
    if (isNaN(minor) || isNaN(mayor)) {
        re = 'Ingresa números válidos';
    } else {
        minor = Math.abs(minor);
        mayor = Math.abs(mayor);

        if (mayor < minor) {
            re = Math.round(Math.random() * (minor - mayor) + mayor);
        } else if (mayor > minor) {
            re = Math.round(Math.random() * (mayor - minor) + minor);
        } else if (mayor === minor) {
            re = Math.round(Math.random() * mayor);
        }
    }
    console.log(re);
};

numbBetween();
numbBetween(0);
numbBetween(2);
numbBetween(1, 1);
numbBetween(1, 5.5);
numbBetween('501', '600');
numbBetween(10, 20);
numbBetween('a', 'b');
numbBetween(-3, -3);
numbBetween('3', '1');
numbBetween('3', '3');
```

> 10. Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

```

```

> 11. Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

```

```

### **Ejercicios Parte 4**

> 12. Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

```

```

> 13. Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

```

```

> 14. Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

```

```

### **Ejercicios Parte 5**

> 15. Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

```

```

> 16. Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

```

```

> 17. Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

```

```

### **Ejercicios Parte 6**

> 18. Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

```

```

> 19. Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

```

```

> 20. Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

```

```

### **Ejercicios Parte 7**

_La expresión regular que uso para el email en este video_ `/[a-z0-9]+(\.[_a-z0-9]+)_@[a-z0-9-]+(\.[a-z0-9-]+)\_(\.[a-z]{2,15})/i`

> 21. Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

```

```

> 22. Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

```

```

> 23. Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

```

```

### **Ejercicios Parte 8**

> 24. Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

```

```

> 25. Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

```

```

> 26. Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

```

```

### **Ejercicios Parte 9**

> 27. Programa una clase llamada Pelicula.
>
> La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director,
> año de estreno, país o países de origen, géneros y calificación en IMBD.
>
> -   Todos los datos del objeto son obligatorios.
> -   Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
> -   Valida que el título no rebase los 100 caracteres.
> -   Valida que el director no rebase los 50 caracteres.
> -   Valida que el año de estreno sea un número entero de 4 dígitos.
> -   Valida que el país o paises sea introducidos en forma de arreglo.
> -   Valida que los géneros sean introducidos en forma de arreglo.
> -   Valida que los géneros introducidos esten dentro de los géneros aceptados\*.
> -   Crea un método estático que devuelva los géneros aceptados\*.
> -   Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
> -   Crea un método que devuelva toda la ficha técnica de la película.
> -   Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
>
> \*Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir,
> Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

```

```
