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

## DOM en JavaScript

> -   [WEB APIs](10_dom.md#web-apis)
> -   [Introduccion al DOM](10_dom.md#introduccion-al-dom)
> -   [Nodos, Elementos y Selectores](10_dom.md#nodos-elementos-y-selectores)
> -   [Atributos y Data-Attributes](10_dom.md#atributos-y-data-attributes)
> -   [Estilos y Variables CSS](10_dom.md#estilos-y-variables-css)
> -   [Clases CSS](10_dom.md#clases-css)
> -   Texto y HTML
> -   DOM Traversing: Recorriendo el DOM
> -   Creando Elementos y Fragmentos
> -   Templates HTML
> -   Modificando Elementos ( Old Style )
> -   Modificando Elementos ( Cool Style )
> -   Manejadores de Eventos
> -   Eventos con Parámetros y Remover Eventos
> -   Flujo de Eventos ( Burbuja y Captura )
> -   stopPropagation & preventDefault
> -   Delegación de Eventos
> -   BOM: Propiedades y Eventos
> -   BOM: Métodos
> -   BOM: Objetos: URL, Historial y Navegador

<hr>

### WEB APIs

**¿Qué son las WEB APIs?**

Las Web APIs en JavaScript son un conjunto de interfaces y funcionalidades predefinidas proporcionadas por los navegadores web que permiten interactuar con diferentes servicios, recursos y capacidades del navegador. Estas APIs están diseñadas para facilitar el desarrollo de aplicaciones web dinámicas y permiten acceder a características avanzadas como el almacenamiento local, manipulación del DOM, interacción con el hardware, y más.

**Principales características de las Web APIs en JavaScript:**

-   **Integración con el navegador**: Proveen acceso a funcionalidades específicas del entorno del navegador.
-   **Interfaz basada en objetos**: Las APIs son objetos que exponen métodos y propiedades para realizar acciones específicas.
-   **Asincronía**: Muchas de estas APIs utilizan promesas o callbacks para manejar tareas que pueden tardar un tiempo, como solicitudes HTTP o lectura de archivos.
-   **Interacción con servicios web**: Permiten conectarse con servidores externos para enviar o recibir datos.

**DOM: Document Object Model**

El DOM es una representación estructurada en forma de árbol que los navegadores crean para interpretar y manipular el contenido HTML de una página web. Cada etiqueta HTML se convierte en un nodo dentro de este árbol, y JavaScript puede acceder a ellos para leer, modificar o eliminar elementos en tiempo real. Por ejemplo, puedes cambiar el texto de un elemento `<p>` usando `document.querySelector('p').textContent = 'Nuevo texto';`. Esto permite construir páginas dinámicas y responder a las acciones del usuario.

**BOM: Browser Object Model**

El BOM es un conjunto de objetos que el navegador expone para interactuar con el entorno de la ventana y su contenido. Incluye funciones y propiedades relacionadas con la ventana del navegador (como `window`), la barra de direcciones, historial (`history`), o el temporizador (`setTimeout`). Por ejemplo, puedes redirigir al usuario a otra página con `window.location.href = 'https://example.com';` o abrir una ventana emergente con `window.open()`. Aunque no está estrictamente estandarizado, el BOM es clave para controlar el navegador desde JavaScript.

**CSSOM: CSS Object Model**

El CSSOM es similar al DOM, pero específicamente para las hojas de estilo CSS aplicadas en una página. Representa las reglas CSS como un conjunto de objetos que se pueden leer y manipular mediante JavaScript. Esto permite ajustar estilos dinámicamente, como cambiar el color de fondo de un elemento con `document.querySelector('body').style.backgroundColor = 'blue';`. También se utiliza para analizar reglas de estilo con mayor detalle, como acceder a estilos calculados con `window.getComputedStyle(elemento)`.

**WEB APIs**

-   Eventos
-   Forms
-   AJAX - Fetch
-   History
-   Web Storage
-   Geolocation
-   Drag & Drop
-   Indexed DB
-   Canvas
-   MatchMedia
-   etc..

### Introduccion al DOM

```
<!-- dom.html -->
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fundamentos JavaScript</title>
    <link rel="stylesheet" href="css\styles.css">
    <style>
        :root {
        --yellow-color: #F7DF1E;
        --dark-color: #222;
        }
    </style>
</head>
<body>
    <h3>Manejo del DOM</h3>
    <p id="que-es">
        Lorem ipsum dolor sit amet consectetu adipisicing elit.
        Nam facilis voluptates optio
        aliquam laborum doloribus obcaecati porro.
    </p>
    <nav id="menu">
        <ul>
            <li><a href="#">Sección 1</a></li>
            <li><a href="#">Sección 2</a></li>
            <li><a href="#">Sección 3</a></li>
            <li><a href="#">Sección 4</a></li>
            <li><a href="#">Sección 5</a></li>
        </ul>
    </nav>

    <input type="text" name="nombre" placeholder="Nombre">

    <a class="link-dom" href="dom.html" data-id="1"
    data-description="Document Object Model">DOM</a>

    <section class="cards">
        <figure class="card">
            <img src="https://picsum.photos/id/0/300/200" alt="Tech">
            <figcaption>Tech</figcaption>
        </figure>
        <figure class="card">
            <img src="https://picsum.photos/id/237/300/200" alt="Animals">
            <figcaption>Animals</figcaption>
        </figure>
        <figure class="card">
            <img src="https://picsum.photos/id/129/300/200" alt="People">
            <figcaption>People</figcaption>
        </figure>
        <figure class="card">
            <img src="https://picsum.photos/id/49/300/200" alt="Architecture">
            <figcaption>Architecture</figcaption>
        </figure>
        <figure class="card">
            <img src="https://picsum.photos/id/28/300/200" alt="Nature">
            <figcaption>Nature</figcaption>
        </figure>
    </section>
</body>
</html>
```

```
// Elementos del Documento
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
    console.log(document.getSelection().toString());
}, 3000);
document.write("<h1>Hola Mundo</h1>")
```

### Nodos Elementos y Selectores

```
// Metodos que ya no se utiliza y fueron reemplazados por querySelector.
// Pero este ultimo es mas lento que getElementsById
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));

console.log(document.querySelector("#menu"));
console.log(document.querySelector("a")); //me trae el primer enlace
console.log(document.querySelectorAll("a")); //me trae todos los enlaces
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el => {console.log(el)});

console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelector("#menu li a"));
console.log(document.querySelectorAll("#menu li"));
console.log(document.querySelectorAll("#menu li a"));
```

### Atributos y Data-Attributes

```
// Obtener los atributos
console.log(document.documentElement);
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

//? Como establecer nuevo valor a los atributos
document.documentElement.lang = "en"
console.log(document.documentElement.lang); // 'en'
document.documentElement.setAttribute("lang", "es-MX")
console.log(document.documentElement.lang); // es-MX

//? Guardar en valiables los elementos del dom

const $linkDOM = document.querySelector(".link-dom")
$linkDOM.setAttribute("target", "_black")
$linkDOM.setAttribute("href", "https://youtube.com")
$linkDOM.setAttribute("rel", "noopener");
// console.log($linkDOM.hasAttribute("rel")); // true
$linkDOM.removeAttribute("rel", "noopener")
console.log($linkDOM.hasAttribute("rel")); // false

//? DATA ATTRIBUTES
console.log($linkDOM.getAttribute("data-description")); //Document Object Model
console.log($linkDOM.dataset); //DOMStringMap {id: '1', description: 'Document Object Model'}

//? Modificar los data attributes
console.log($linkDOM.dataset.description); // Document Object Model

$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")
console.log($linkDOM.dataset.description); // Modelo ...

$linkDOM.dataset.description = "Suscribete a mi canal y comparte"
console.log($linkDOM.dataset.description); // Suscribete ...

console.log($linkDOM.hasAttribute("data-id")); //true
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id")); //false
```

### Estilos y Variables CSS

```
<!-- dom.html -->
<!-- Agregamos un atributo style al enlace link-dom -->
<a class="link-dom" href="dom.html"
data-id="1"
data-description="Document Object Model">DOM</a>
```

```
/* css\styles.css */
.link-dom {
    color: #ffffff;
    background-color: #464646;
}
```

```
//Ver los atributos de Estilos
const $linkDOM = document.querySelector(".link-dom")
console.log($linkDOM.getAttribute("style"));                        //background-color: #F7DF1E; color: #222;
console.log($linkDOM.style);                                        //CSSStyleDeclaration {0: 'background-color', 1: 'color', ...}
console.log($linkDOM.style.backgroundColor);                        //rgb (247, 223, 30)
console.log($linkDOM.style.color);                                  //rgb (34, 34, 34)
console.log(window.getComputedStyle($linkDOM));                     //CSSStyleDeclaration{...}
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));  //rgb (34, 34, 34)

//? Establecer valores
$linkDOM.style.setProperty("text-decoration", "none")
$linkDOM.style.setProperty("display", "block")
$linkDOM.style.width = "50%"
$linkDOM.style.textAlign = "center"
$linkDOM.style.marginLeft = "auto"
$linkDOM.style.marginRight = "auto"
$linkDOM.style.padding = "1rem"
$linkDOM.style.borderRadius = ".5rem"

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//? VARIABLES CSS - CUSTOM PROPERTIES CSS;
const $html = document.documentElement, $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor, varYellowColor);                          // #222 #F7DF1E

//?Establecer colores al body
$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

$html.style.setProperty("--dark-color", "#000")
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
$body.style.setProperty("background-color", varDarkColor)
```

### Clases CSS

```
<!-- dom.html -->
<style>
    :root {
        --yellow-color: #F7DF1E;
        --dark-color: #222;
    }
    .card {
        display: inline-block;
        background-color: var(--dark-color);
        color: var(--yellow-color);
    }
    .card figcaption {
        padding: 1rem;
    }
    /* // Clases auxiliares */
    .rotate-45 {
        transform: rotate(45deg);
    }
    .rotate-135 {
        transform: rotate(135deg);
    }
    .opacity-80 {
        opacity: .8;
    }
    .sepia {
        filter: sepia(1);
    }
</style>
```

```
// Nos traemos la primera card (tech)
const $card = document.querySelector(".card")
console.log($card);           // <figure class="card">…</figure>
console.log($card.className); //card
console.log($card.classList); //DOMTokenList ['card', value: 'card']
```
