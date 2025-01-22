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
> -   [Atributos y Data Attributes](10_dom.md#atributos-y-data-attributes)
> -   [Estilos y Variables CSS](10_dom.md#estilos-y-variables-css)
> -   [Clases CSS](10_dom.md#clases-css)
> -   [Texto y HTML](10_dom.md#texto-y-html)
> -   [Traversing Recorriendo el DOM](10_dom.md#dom-traversing-recorriendo-el-dom)
> -   [Creando Elementos y Fragmentos](10_dom.md#creando-elementos-y-fragmentos)
> -   [Templates HTML](10_dom.md#templates-html)
> -   [Modificando Elementos (Old Style)](10_dom.md#modificando-elementos-old-style)
> -   [Modificando Elementos (Cool Style)](10_dom.md#modificando-elementos-cool-style)
> -   Manejadores de Eventos
> -   Eventos con Parámetros y Remover Eventos
> -   Flujo de Eventos (Burbuja y Captura)
> -   stopPropagation and preventDefault
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
    <h1>Manejo del DOM</h1>

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
            <img src="https://picsum.photos/id/49/300/200" alt="Architecture">
            <figcaption>Architecture</figcaption>
        </figure>
        <figure class="card">
            <img src="https://picsum.photos/id/129/300/200" alt="People">
            <figcaption>People</figcaption>
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

### Atributos y Data Attributes

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
const $html = document.documentElement
const $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
console.log(varDarkColor, varYellowColor);                          // #222 #F7DF1E

//?Establecer colores al body
$body.style.backgroundColor = varDarkColor
$body.style.color = varYellowColor

$html.style.setProperty("--dark-color", "#212121")
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

console.log(varDarkColor); //#-222 - #-2121

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

console.log($card.classList.contains("rotate-45")); //false

$card.classList.add("rotate-45")
console.log($card.className); //card rotate-45
console.log($card.classList); //DOMTokenList(2) ['card', 'rotate-45', value: 'card rotate-45']

$card.classList.remove("rotate-45")
console.log($card.classList.contains("rotate-45")); //false

$card.classList.toggle("rotate-45")
console.log($card.classList.contains("rotate-45")); //true

$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80");
$card.classList.toggle("sepia");
```

### Texto y HTML

```
<p id="que-es">
    Lorem ipsum dolor sit amet consectetu adipisicing elit.
    Nam facilis voluptates optio
    aliquam laborum doloribus obcaecati porro.
</p>
```

```
const $whatIsDOM = document.getElementById("que-es")

let text = `
<p>
    El Modelo de Objetos del Documento (<b><i>DOM -
    Document Object Model</i></b>) es un API para
    documentos HTML y XML.
</p>
<p>
    Éste proveé una representación estructural del
    documento, permitiendo modificar su contenido y
    presentación visual mediante código JS.
</p>
<p>
    <mark>El DOM no es parte de la especificación de
    JavaScript, es una API para los navegadores.</mark>
</p>
`;

// Para agregar contenido textual

// $whatIsDOM.innerText = text // No forma parte del standar

// Cuando necesites insertar solo texto
// $whatIsDOM.textContent = text

// Cuando necesites insertar solo html
// $whatIsDOM.innerHTML = text

// Eliminar el contenedor con id "que-es" por el texto.
$whatIsDOM.outerHTML = text;
```

### DOM Traversing Recorriendo el DOM

```
<!-- dom.html -->
<style>
    ...
    .cards {
        border: thin solid var(--dark-color);
        padding: 1rem;
    }
<style>
```

```
const $cards = document.querySelector(".cards")
// console.log($cards)

// Referencia asus hijos
// console.log($cards.childNodes)

console.log($cards.children)
console.log($cards.children[2])

// console.log($cards.parentElement) // Body
// console.log($cards.parentNode)    // Body

// console.log($cards.firstChild) // #text - textContent "\n       "
// console.log($cards.lastChild)

console.log($cards.firstElementChild)
console.log($cards.lastElementChild)

// console.log($cards.previousSibling) // #text
// console.log($cards.nextSibling) // #text

console.log($cards.previousElementSibling) // <a>
console.log($cards.nextElementSibling) // <script>

// El padre mas cercano del selector dado
// console.log($cards.closest("div")) // null
console.log($cards.children[3].closest("section"))
```

### Creando Elementos y Fragmentos

> [W3S HTML DOM - Nodes](https://www.w3schools.com/js/js_htmldom_nodes.asp)
>
> [Arbol de Nodos](https://sarreplec.caib.es/pluginfile.php/10750/mod_resource/content/2/DWEC06_v1/ArchivosUnidad/Moodle/DWEC06_Contenidos/12_el_rbol_del_dom_y_tipos_de_nodos.html)
>
> [MDN - Node](https://developer.mozilla.org/es/docs/Web/API/Node)

```
// Crear elementos html
const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");

$img.setAttribute("src", "https://picsum.photos/id/237/300/200")
$img.setAttribute("alt", "Animals")

$figure.classList.add("card")

$figcaption.appendChild($figcaptionText)

$figure.appendChild($img)
$figure.appendChild($figcaption)

$cards.appendChild($figure)

$figure2.innerHTML = `
<img src="https://picsum.photos/id/129/300/200" alt="People">
<figcaption>People</figcaption>
`
$figure2.classList.add("card");
$cards.appendChild($figure2)
```

```
const estaciones = ["Primavera", "Verano", "Otonio", "Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>")
document.body.appendChild($ul)

estaciones.forEach(el => {
    const $li = document.createElement("li")

    $li.textContent = el
    $ul.appendChild($li)

    // text = document.createTextNode(el)
    // $li.appendChild(text)
    // $ul.appendChild($li)
});
```

```
const continentes = ["África", "América", "Asia",
                    "Europa", "Oceanía"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = ``;
continentes.forEach((el) => $ul2.innerHTML += `<li>${el}</li>`);
```

```
// Fragmentos
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
],
$ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li")
    $li.textContent = el
    $fragment.appendChild($li)
});

document.write("<h3>Meses del Año</h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3)
```

### Templates HTML

```
<!-- dom.html -->
<template id="template-card">
    <figure class="card">
        <img>
        <figcaption></figcaption>
    </figure>
</template>
```

```
const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnología",
            img: "https://picsum.photos/id/119/300/200"
        },
        {
            title: "Animales",
            img: "https://picsum.photos/id/169/300/200"
        },
        {
            title: "Arquitectura",
            img: "https://picsum.photos/id/238/300/200"
        },
        {
            title: "Gente",
            img: "https://picsum.photos/id/177/300/200"
        },
        {
            title: "Naturaleza",
            img: "https://picsum.photos/id/15/300/200"
        },
    ];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img)
    $template.querySelector("img").setAttribute("alt", el.title)
    $template.querySelector("figcaption").textContent = el.title

    // Nodo clonado del template
    let $clone = document.importNode($template, true);

    $fragment.appendChild($clone);
});

$cards.appendChild($fragment)
```

### Modificando Elementos Old Style

```
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://picsum.photos/seed/any-seed/300/200" alt="Any">
<figcaption>Any</figcaption>
`
$newCard.classList.add("card");

// $cards.replaceChild($newCard, $cards.children[2])
// $cards.insertBefore($newCard, $cards.firstElementChild)
// $cards.removeChild($cards.lastElementChild)
// document.body.appendChild($cloneCards)
```

### Modificando Elementos Cool Style

> `.insertAdjacent...(position, ...)`
>
> -   [`.insertAdjacentElement(position, HTMLElement)`](https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement)
> -   [`.insertAdjacentHTML(position, html-text)`](https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentHTML)
> -   [`.insertAdjacentText(position, text-string)`](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentText)
>
> Posiciones (`position`):
>
> -   _`"beforebegin"`_ (como hermano anterior)
> -   _`"afterbegin"`_ (como primer hijo)
> -   _`"beforeend"`_ (como ultimo hijo)
> -   _`"afterend"`_ (como hermano siguiente)

> -   _`Element.prepend()`_ (Primer hijo)
> -   _`Element.before()`_ (Hermano anterior)
> -   _`Element.append()`_ (Ultimo Hijo)
> -   _`Element.after()`_ (Hermano Siguiente)

```
/*
.insertAdjacent...
    .insertAdjacentElement(position, HTMLElement)
    .insertAdjacentHTML(position, `<p>html</p>`)
    .insertAdjacentText(position, text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)
*/

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure")

// $newCard.innerHTML = `
// <img src="https://picsum.photos/seed/any-seed/300/200" alt="Any">
// <figcaption>Any</figcaption>
// `

let $contentCard = `
<img src="https://picsum.photos/seed/any-seed/300/200" alt="Any">
<figcaption></figcaption>
`
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contentCard)
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")

// $cards.insertAdjacentElement("beforebegin", $newCard)
// $cards.insertAdjacentElement("afterbegin", $newCard)
// $cards.insertAdjacentElement("beforeend", $newCard)
// $cards.insertAdjacentElement("afterend", $newCard)

// $cards.prepend($newCard)    // Primer hijo
// $cards.before($newCard)     // Hermano anterior
// $cards.append($newCard)     // Ultimo Hijo
// $cards.after($newCard)      // Hermano Siguiente
```
