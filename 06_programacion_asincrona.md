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

## Programación Asincrona

> -   [Temporizadores (setTimeout y setInterval)](06_programacion_asincrona.md#temporizadores-settimeout-y-setinterval)
> -   [Asincronia y Event Loop](06_programacion_asincrona.md#asincronia-y-event-loop)
> -   [Callbacks](06_programacion_asincrona.md#callbacks)
> -   [Promesas](06_programacion_asincrona.md#promesas)
> -   [Funciones Asincronas (Async y Await)](06_programacion_asincrona.md#funciones-asincronas-async-y-await)

[JavaScript Asincrono (jonmircha.com)](https://jonmircha.com/javascript-asincrono)

[Loupe (Visualisation)](http://latentflip.com/loupe/)

### **Temporizadores setTimeout y setInterval**

> En JavaScript, los temporizadores se utilizan para ejecutar funciones después de un período de tiempo específico. `setTimeout` se usa para ejecutar una función una sola vez después de un retraso dado en milisegundos.
> Por ejemplo, `setTimeout(() => console.log("Hola"), 1000)` ejecutará el mensaje después de 1 segundo.
> Por otro lado, `setInterval` ejecuta una función repetidamente a intervalos específicos. Por ejemplo, `setInterval(() => console.log("Hola"), 1000)` imprimirá "Hola" cada segundo hasta que se detenga con clearInterval.

```javascript
// **SetTimeOut**

let temporizador1 = setTimeout(() => {
    console.log('Ejecutando un setTimeout, esto se ejecuta una sóla vez.');
}, 2000);

// clearTimeout(temporizador)
console.log('Despues del clearTimeout');

// **SetInterval**
setInterval(() => {
    console.log(
        'Ejecutando un setInterval, esto se ejecuta indefinidamente cada cierto intervalo de tiempo'
    );
}, 1000);

let temporizador = setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleTimeString());
}, 1000);

// clearInterval(temporizador);
console.log('Despues del clearInterval');
```

### **Asincronia y Event Loop**

> La asincronía en JavaScript permite que el código realice múltiples tareas sin bloquear la ejecución principal. Esto es posible gracias al Event Loop, que gestiona las tareas asincrónicas como temporizadores, solicitudes HTTP y eventos del navegador.
> El Event Loop monitorea dos partes clave: la pila de llamadas (Call Stack) y la cola de tareas (Task Queue). Cuando una tarea asincrónica termina, su callback se coloca en la cola de tareas y se ejecuta en la pila de llamadas solo si está vacía.
> Esto asegura que JavaScript permanezca eficiente y no se detenga esperando operaciones lentas como leer un archivo o cargar datos de un servidor.
>
> **Procesamiento Single thread y Multi thread.**
>
> Un hilo la unidad básica de ejecución de un proceso, cada que abres un programa como el
> navegador o tu editor de código, se levanta un proceso en tu computadora e internamente
> este puede tener uno o varios hilos (threads) ejecutándose para que el proceso funcione.
>
> **Operaciones de CPU y Operaciones de I/O (Entrada y Salida).**
>
> -   **Operaciones CPU**: Aquellas que pasan el mayor tiempo consumiendo Procesos del CPU,
>     por ejemplo, la escritura de ficheros.
> -   **Operaciones de Entrada y Salida**: Aquellas que pasan la mayor parte del tiempo esperando
>     la respuesta de una petición o recurso, como la solicitud a una API o BD.
>
> **Operaciones Concurrentes y Paralelas.**
>
> -   **Concurrencia**: cuando dos o más tareas progresan simultáneamente.
> -   **Paralelismo**: cuando dos o más tareas se ejecutan, al mismo tiempo.
>
> **Operaciones Bloqueantes y No Bloqueantes.**
>
> -   **Bloqueante**: Son operaciones que no devuelven el control a nuestra aplicación hasta que
>     se ha completado. Por tanto el thread queda bloqueado en estado de espera.
> -   **No Bloqueante**: Son operaciones que devuelven inmediatamente el control a nuestra aplicación,
>     independientemente del resultado de esta. En caso de que se haya completado, devolverá
>     los datos solicitados. En caso contrario (si la operación no ha podido ser satisfecha)
>     podría devolver un código de error.
>
> **Operaciones Síncronas y Asíncronas.**
>
> -   **Síncrono**: La respuesta sucede en el presente, una operación síncrona esperará el resultado.
> -   **Asíncrono**: La respuesta sucede a futuro, una operación asíncrona no esperará el resultado.

```javascript
//Código Síncrono Bloqueante
(() => {
    console.log('Código Síncrono');
    console.log('Inicio');

    function dos() {
        console.log('Dos');
    }

    function uno() {
        console.log('Uno');
        dos();
        console.log('Tres');
    }

    uno();
    console.log('Fin');
})();

// Inicio
// Uno
// Dos
// Tres
// Fin

// Código Asíncrono No Bloqueante
(() => {
    console.log('Código Asíncrono');
    console.log('Inicio');

    function dos() {
        setTimeout(function () {
            console.log('Dos');
        }, 1000);
    }

    function uno() {
        setTimeout(function () {
            console.log('Uno');
        }, 0);
        dos();
        console.log('Tres');
    }

    uno();
    console.log('Fin');
})();

// Inicio
// Tres
// Fin
// Uno
// Dos
```

### **Callbacks**

> Una **callback** (llamada de vuelta) es una función que se ejecutará después de que otra lo haga. Es un mecanismo para asegurar que cierto código no se ejecute hasta que otro haya terminado.
> Una función callback es aquella que es pasada como argumento a otra función para que sea "llamada de nuevo" (call back) en un momento posterior. Una función que acepta otras funciones como argumentos es llamada función de orden-superior (High-Order), y contiene la lógica para determinar cuándo se ejecuta la función callback. Es la combinación de estas dos la que nos permite ampliar nuestra funcionalidad.
> Al ser JavaScript un lenguaje orientado a eventos, las callbacks son una buena técnica para controlar la asíncronía, sin embargo... Callback Hell 😈🤘.

```javascript
function cuadradoCallback(value, callback) {
    setTimeout(() => {
        callback(value, value * value);
    }, 0 | (Math.random() * 1000));
}

cuadradoCallback(0, (value, result) => {
    console.log('Inicia Callback');
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallback(1, (value, result) => {
        console.log(`Callback: ${value}, ${result}`);
        cuadradoCallback(2, (value, result) => {
            console.log(`Callback: ${value}, ${result}`);
            cuadradoCallback(3, (value, result) => {
                console.log(`Callback: ${value}, ${result}`);
                cuadradoCallback(4, (value, result) => {
                    console.log(`Callback: ${value}, ${result}`);
                    cuadradoCallback(5, (value, result) => {
                        console.log(`Callback: ${value}, ${result}`);
                        console.log('Fin Callback');
                        console.log('Callback Hell !!!!!😈🤘');
                        console.log('http://callbackhell.com/');
                    });
                });
            });
        });
    });
});
```

### **Promesas**

> Las promesas son un mecanismo más estructurado para manejar tareas asincrónicas. Una promesa representa un valor que puede estar pendiente, cumplido o rechazado. Esto permite manejar el resultado de una tarea de manera más clara que con callbacks.

```javascript
function cuadradoPromise(value) {
    if (typeof value !== 'number') {
        return Promise.reject(
            `Error el valor "${value}" ingresado no es un número.`
        );
    }

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value,
                result: value * value,
            });
        }, 0 | (Math.random() * 1000));
    });
}

cuadradoPromise(0)
    .then((obj) => {
        // console.log(obj);
        console.log('Inicio Promise');
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(1);
    })
    .then((obj) => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then((obj) => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise('3');
    })
    .then((obj) => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then((obj) => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then((obj) => {
        console.log(`Promise ${obj.value}, ${obj.result}`);
        console.log('Fin Promise');
    })
    .catch((err) => console.error(err));
```

### Funciones Asincronas Async y Await

> Async/Await simplifica aún más el manejo de promesas al permitir escribir código asincrónico como si fuera síncrono. Una función marcada con `async` devuelve automáticamente una promesa, y dentro de ella puedes usar `await` para pausar la ejecución hasta que una promesa se resuelva.

```javascript
async function funcionAsincronaDeclarada() {
    try {
        console.log('Inicio Async Function');

        let obj = await cuadradoPromise(0);
        console.log(`Async Function: ${obj.value}, ${obj.result}.`);

        obj = await cuadradoPromise(1);
        console.log(`Async Function: ${obj.value}, ${obj.result}.`);

        obj = await cuadradoPromise(2);
        console.log(`Async Function: ${obj.value}, ${obj.result}.`);

        obj = await cuadradoPromise('3');
        console.log(`Async Function: ${obj.value}, ${obj.result}.`);

        obj = await cuadradoPromise(4);
        console.log(`Async Function: ${obj.value}, ${obj.result}.`);

        obj = await cuadradoPromise(5);
        console.log(`Async Function: ${obj.value}, ${obj.result}.`);

        console.log('Fin Async Function');
    } catch (error) {
        console.error(error);
    }
}

funcionAsincronaDeclarada();

const funcionAsincronaExpresada = async () => {
    try {
        console.log('Inicio Async Function');

        let obj = await cuadradoPromise(6);
        console.log(`Async Function: ${obj.value}, ${obj.result}.`);

        obj = await cuadradoPromise(7);
        console.log(`Async Function: ${obj.value}, ${obj.result}.`);

        obj = await cuadradoPromise(8);
        console.log(`Async Function: ${obj.value}, ${obj.result}.`);

        obj = await cuadradoPromise('9');
        console.log(`Async Function: ${obj.value}, ${obj.result}.`);

        obj = await cuadradoPromise(10);
        console.log(`Async Function: ${obj.value}, ${obj.result}.`);

        console.log('Fin Async Function');
    } catch (error) {
        console.error(error);
    }
};

funcionAsincronaExpresada();
```
