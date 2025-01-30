
// console.clear()
// console.log("********** DOM **********");

/* //* WEB APIs */ {
    
    // WEB APIs
    //     DOM: Document Object Model
    //     BOM: Browser Object Model
    //     CSSOM: CSS Object Model
    // WEB APIs
    //     Eventos
    //     Forms
    //     AJAX - Fetch
    //     History
    //     Web Storage
    //     Geolocation
    //     Drag & Drop
    //     Indexed DB
    //     Canvas
    //     MatchMedia
    //     etc..

    // const texto = "Hola, soy tu amiga la robota";
    // const utterance = new SpeechSynthesisUtterance(texto);
    // const hablar = () => speechSynthesis.speak(utterance);
    // hablar()
}

/* //* Introduccion DOM */ {

// console.log("********** Elementos del Documento **********");
// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.characterSet);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);

// setTimeout(() => {
//     console.log(document.getSelection().toString());
// }, 3000);

// document.write("<h1>Hola Mundo</h1>") 

}

/* //* DOM: Nodos, Elementos y Selectores */{

    //* Metodos que ya no se utiliza

    // console.log(document.getElementsByTagName("li"));
    // console.log(document.getElementsByClassName("card"));
    // console.log(document.getElementsByName("nombre"));
        
    //* Estos metodos han sido remplazados por querySelector
    //* El querySelector es mas lento que el gelElementById

    // console.log(document.getElementById("menu"));

    // console.log(document.querySelector("#menu"));
    // console.log(document.querySelector("a")); //me trae el primer enlace
    // console.log(document.querySelectorAll("a")); //me trae todos los enlaces
    // console.log(document.querySelectorAll("a").length);
    // document.querySelectorAll("a").forEach(el => {console.log(el)});

    // console.log(document.querySelector(".card"));
    // console.log(document.querySelectorAll(".card"));
    // console.log(document.querySelectorAll(".card")[2]);
    // console.log(document.querySelector("#menu li"));
    // console.log(document.querySelector("#menu li a"));
    // console.log(document.querySelectorAll("#menu li"));
    // console.log(document.querySelectorAll("#menu li a"));
}

/* //* Atributos y Data-Attributes */ {

    // console.log(document.documentElement);
    // console.log(document.documentElement.lang);
    // console.log(document.documentElement.getAttribute("lang"));
    // console.log(document.querySelector(".link-dom"));
    // console.log(document.querySelector(".link-dom").href);
    // console.log(document.querySelector(".link-dom").getAttribute("href"));
    
    // Como establecer nuevo valor a los atributos
    // document.documentElement.lang = "en"
    // console.log(document.documentElement.lang);
    // document.documentElement.setAttribute("lang", "es-MX")
    // console.log(document.documentElement.lang);

    // Guardar en valiables los elementos del dom
    const $linkDOM = document.querySelector(".link-dom")

    $linkDOM.setAttribute("target", "_black")
    $linkDOM.setAttribute("href", "https://youtube.com")
    $linkDOM.setAttribute("rel", "noopener");
    // console.log($linkDOM.hasAttribute("rel")); //true
    $linkDOM.removeAttribute("rel", "noopener")
    // console.log($linkDOM.hasAttribute("rel")); // false

    //? DATA ATTRIBUTES
    // console.log($linkDOM.getAttribute("data-description")); //DOM
    // console.log($linkDOM.dataset); //DOMStringMap {id: '1', description: 'Document Object Model'}

    //? Modificar los data attributes
    // console.log($linkDOM.dataset.description); // Document Object Model
    // $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")
    // console.log($linkDOM.dataset.description); // Modelo ...
    $linkDOM.dataset.description = "Suscribete a mi canal y comparte"
    // console.log($linkDOM.dataset.description); // Suscribete ...
    
    // console.log($linkDOM.hasAttribute("data-id")); //true
    $linkDOM.removeAttribute("data-id");
    // console.log($linkDOM.hasAttribute("data-id")); //false

}

/* //* DOM: Estilos y Variables CSS */ {
    const $linkDOM = document.querySelector(".link-dom")
    // console.log($linkDOM.getAttribute("style")); //background-color: #F7DF1E; color: #222;
    // console.log($linkDOM.style); // CSSStyleDeclaration{...}
    // console.log($linkDOM.style.backgroundColor); //rgb(247, 223, 30)
    // console.log($linkDOM.style.color);
    // console.log(window.getComputedStyle($linkDOM)); //CSSStyleDeclaration{,,,}
    // console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

    //? Establecer valores
    $linkDOM.style.setProperty("text-decoration", "none")
    $linkDOM.style.setProperty("display", "block")
    $linkDOM.style.width = "50%"
    $linkDOM.style.textAlign = "center"
    $linkDOM.style.marginLeft = "auto"
    $linkDOM.style.marginRight = "auto"
    $linkDOM.style.padding = "1rem"
    $linkDOM.style.borderRadius = ".5rem"

    // console.log($linkDOM.style);
    // console.log($linkDOM.getAttribute("style"));
    // console.log(getComputedStyle($linkDOM));

    //?! VARIABLES CSS - CUSTOM PROPERTIES CSS;
    const $html = document.documentElement
    const $body = document.body;
    
    let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
    // console.log(varDarkColor, varYellowColor); // #222 #F7DF1E

    //?Establecer colores al body
    // $body.style.backgroundColor = varDarkColor
    // $body.style.color = varYellowColor

    // $html.style.setProperty("--dark-color", "#212121")
    // varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")

    // console.log(varDarkColor); //#-222 - #-2121

    // $body.style.setProperty("background-color", varDarkColor)

}

/* //* DOM: CLases CSS */ {

    // Nos traemos la primera card (tech)
    // const $card = document.querySelector(".card")
    // console.log($card); // <figure class="card">…</figure>

    // console.log($card.className); //card
    // console.log($card.classList); //DOMTokenList ['card', value: 'card']

    // console.log($card.classList.contains("rotate-45")); //false

    // $card.classList.add("rotate-45")
    // console.log($card.className); //card rotate-45
    // console.log($card.classList); //DOMTokenList(2) ['card', 'rotate-45', value: 'card rotate-45']

    // $card.classList.remove("rotate-45")
    // console.log($card.classList.contains("rotate-45")); //false
    
    // $card.classList.toggle("rotate-45")
    // console.log($card.classList.contains("rotate-45")); //true
    
    // $card.classList.replace("rotate-45", "rotate-135");
    // $card.classList.add("opacity-80", "sepia");
    // $card.classList.remove("opacity-80", "sepia");
    // $card.classList.toggle("opacity-80");
    // $card.classList.toggle("sepia");

}

/* //* DOM: Texto y HTML */ {

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

    // $whatIsDOM.innerText = text  // No forma parte del standar
    // $whatIsDOM.textContent = text   // Cuando necesites insertar solo texto
    // $whatIsDOM.innerHTML = text     // Cuando necesites insertar solo html
    $whatIsDOM.outerHTML = text;    // Eliminar el contenedor con id "que-es" por el texto.

}

/* //* DOM Traversing: Recorriendo el DOM */{

    const $cards = document.querySelector(".cards")
    // console.log($cards)
    
    // Referencia asus hijos
    // console.log($cards.childNodes)

    // console.log($cards.children)
    // console.log($cards.children[2])

    // console.log($cards.parentElement) // Body
    // console.log($cards.parentNode)    // Body

    // console.log($cards.firstChild) // #text - textContent "\n        "
    // console.log($cards.lastChild)

    // console.log($cards.firstElementChild)
    // console.log($cards.lastElementChild)

    // console.log($cards.previousSibling) // #text
    // console.log($cards.nextSibling) // #text

    // console.log($cards.previousElementSibling) // <a>
    // console.log($cards.nextElementSibling) // <script>

    // El padre mas cercano del selector dado
    // console.log($cards.closest("div")) // null
    // console.log($cards.children[3].closest("section"))
}

/* //* DOM: Creando Elementos y Fragmentos */ {

    // https://www.w3schools.com/js/js_htmldom_nodes.asp

    // https://sarreplec.caib.es/pluginfile.php/10750/mod_resource/content/2/DWEC06_v1/ArchivosUnidad/Moodle/DWEC06_Contenidos/12_el_rbol_del_dom_y_tipos_de_nodos.html

    // https://developer.mozilla.org/es/docs/Web/API/Node

    // Crear elementos html
//     const $figure = document.createElement("figure"),
//         $img = document.createElement("img"),
//         $figcaption = document.createElement("figcaption"),
//         $figcaptionText = document.createTextNode("Animals"),
//         $cards = document.querySelector(".cards"),
//         $figure2 = document.createElement("figure");
    
//     $img.setAttribute("src", "https://picsum.photos/id/237/300/200")
//     $img.setAttribute("alt", "Animals")
    
//     $figure.classList.add("card")

//     $figcaption.appendChild($figcaptionText)
    
//     $figure.appendChild($img)
//     $figure.appendChild($figcaption)
    
//     $cards.appendChild($figure)

//     $figure2.innerHTML = `
//     <img src="https://picsum.photos/id/129/300/200" alt="People">
//     <figcaption>People</figcaption>
// `
//     $figure2.classList.add("card");
//     $cards.appendChild($figure2)


//     const estaciones = ["Primavera", "Verano", "Otonio", "Invierno"],
//         $ul = document.createElement("ul");
    
//     document.write("<h3>Estaciones del Año</h3>")
//     document.body.appendChild($ul)

//     estaciones.forEach(el => {
//         const $li = document.createElement("li")
    
//         $li.textContent = el
//         $ul.appendChild($li)

//         // text = document.createTextNode(el)
//         // $li.appendChild(text)
//         // $ul.appendChild($li)
//     });


    // const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
    //     $ul2 = document.createElement("ul");

    // document.write("<h3>Continentes del Mundo</h3>");
    // document.body.appendChild($ul2);

    // $ul2.innerHTML = ``;
    // continentes.forEach((el) => $ul2.innerHTML += `<li>${el}</li>`);

    // Fragmentos
    // const meses = [
    //     "Enero",
    //     "Febrero",
    //     "Marzo",
    //     "Abril",
    //     "Mayo",
    //     "Junio",
    //     "Julio",
    //     "Agosto",
    //     "Septiembre",
    //     "Octubre",
    //     "Noviembre",
    //     "Diciembre",
    // ],
    // $ul3 = document.createElement("ul"),
    //     $fragment = document.createDocumentFragment();
    
    // meses.forEach(el => {
    //     const $li = document.createElement("li")
    //     $li.textContent = el
    //     $fragment.appendChild($li)
    // });

    // document.write("<h3>Meses del Año</h3>")
    // $ul3.appendChild($fragment)
    // document.body.appendChild($ul3)
}

/* //* DOM: Templates HTML */ {

    // const $cards = document.querySelector(".cards"),
    //     $template = document.getElementById("template-card").content,
    //     $fragment = document.createDocumentFragment(),
    //     cardContent = [
    //         {
    //             title: "Tecnología",
    //             img: "https://picsum.photos/id/119/300/200"
    //         },
    //         {
    //             title: "Animales",
    //             img: "https://picsum.photos/id/169/300/200"
    //         },
    //         {
    //             title: "Arquitectura",
    //             img: "https://picsum.photos/id/238/300/200"
    //         },
    //         {
    //             title: "Gente",
    //             img: "https://picsum.photos/id/177/300/200"
    //         },
    //         {
    //             title: "Naturaleza",
    //             img: "https://picsum.photos/id/15/300/200"
    //         },
    //     ];
    
    // cardContent.forEach(el => {
    //     $template.querySelector("img").setAttribute("src", el.img)
    //     $template.querySelector("img").setAttribute("alt", el.title)
    //     $template.querySelector("figcaption").textContent = el.title

    //     // Nodo clonado del template
    //     let $clone = document.importNode($template, true);

    //     $fragment.appendChild($clone);
    // });

    // $cards.appendChild($fragment)
}

/* //* DOM: Modificando Elementos (Old Style) */ {

    // const $cards = document.querySelector(".cards"),
    //     $newCard = document.createElement("figure"),
    //     $cloneCards = $cards.cloneNode(true);
    
    // $newCard.innerHTML = `
    // <img src="https://picsum.photos/seed/any-seed/300/200" alt="Any">
    // <figcaption>Any</figcaption>
    // `
    // $newCard.classList.add("card");

    // $cards.replaceChild($newCard, $cards.children[2])
    // $cards.insertBefore($newCard, $cards.firstElementChild)
    // $cards.removeChild($cards.lastElementChild)
    // document.body.appendChild($cloneCards)
}

/* // * DOM: Modificando Elementos (Cool Style) */ {

    // https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement

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
    
    // const $cards = document.querySelector(".cards"),
    //     $newCard = document.createElement("figure")
    
    // $newCard.innerHTML = `
    // <img src="https://picsum.photos/seed/any-seed/300/200" alt="Any">
    // <figcaption>Any</figcaption>
    // `

    // let $contentCard = `
    // <img src="https://picsum.photos/seed/any-seed/300/200" alt="Any">
    // <figcaption></figcaption>
    // `
    // $newCard.classList.add("card");

    // $newCard.insertAdjacentHTML("beforeend", $contentCard)
    // $newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any")

    // $cards.insertAdjacentElement("beforebegin", $newCard)
    // $cards.insertAdjacentElement("afterbegin", $newCard)
    // $cards.insertAdjacentElement("beforeend", $newCard)
    // $cards.insertAdjacentElement("afterend", $newCard)

    // $cards.prepend($newCard)    // Primer hijo
    // $cards.before($newCard)     // Hermano anterior
    // $cards.append($newCard)     // Ultimo Hijo
    // $cards.after($newCard)      // Hermano Siguiente

}

/* //* DOM: Manejadores de Eventos */ {

    // https://developer.mozilla.org/en-US/docs/Web/Events

    /**
    * 📝 Los Eventos

    👉 Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario y definir ciertos comportamientos del documento q sucedan en cierto momento o cuando se cumplan algunas condiciones.

    👉 Ahora, las funciones q se ejecutan en un Evento es lo q se conoce como el Event Handler o traducido Manejadores de Eventos, o tmb Observadores o Escuchadores.
    
    👉 Hay 3 maneras de definir los Eventos en JS : 
    */

    // MANEJADOR COMO ATRIBUTO DEL HTML
    function holaMundo() {
        alert("Hola Mundo")
        console.log(event)
    };

    // MANEJADOR SEMÁNTICO
    const $eventoSemantico = document.getElementById("evento-semantico");
    
    $eventoSemantico.onclick = holaMundo
    $eventoSemantico.onclick = function (e) {
        alert(`Hola Mundo Manejador de Evento Semántico`)
        console.log(e);
        console.log(event);
    };

    // COMO MANEJADOR MÚLTIPLE
    const $eventoMultiple = document.getElementById("evento-multiple")

    $eventoMultiple.addEventListener("click", holaMundo)
    $eventoMultiple.addEventListener("click", (e) => {
        alert("Hola Mundo Manejador de Eventos Multiple");
        // console.log(e);
        // console.log(e.type);
        // console.log(e.target);
        // console.log(event);
    });
}

/* //* DOM: Eventos con Parametros y Remover Eventos */ {

    // Para ejecutar una función con parametros en evento, lo envuelves en una Arrow Function.
    /*
    function saludar(nombre="Desconocid@") {
        alert(`Hola ${nombre}`);
        console.log(event);
    };

    const $eventoMultiple = document.getElementById("evento-multiple"),
        $eventoRemover = document.getElementById('evento-remover')

    $eventoMultiple.addEventListener("click", () => {
        saludar() // Hola Desconocid@
        saludar("Pepito") // Hola Pepito
    });

    // Eliminar Eventos

    const removerDobleClick = (e) => {
        alert(`Removiendo el evento de tipo ${e.type}`);
        console.log(e);
        $eventoRemover.removeEventListener("dblclick", removerDobleClick);
        $eventoRemover.disabled = true;
    }

    $eventoRemover.addEventListener("dblclick", removerDobleClick)
    */
}

/* //* DOM: Flujo de Eventos Burbuja y Captura */ {

    /*
    const $divsEventos = document.querySelectorAll('.eventos-flujo div')
    // console.log($divsEventos);
    
    function flujoEventos(e) {
        console.log(
            `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
        );
    }

    $divsEventos.forEach(div => {
        // FASE DE BURBUJA - INTERNO A EXTERNO
        div.addEventListener('click', flujoEventos)
        div.addEventListener('click', flujoEventos, false)

        // FASE DE CAPTURA - EXTERNO A INTERNO
        div.addEventListener('click', flujoEventos, true)
        div.addEventListener('click', flujoEventos, {
            capture: false,
            once: true, // Se ejecuta una sola vez
        })
    })
    */
}

/* //* DOM: stopPropagation & preventDefault */ {

    /*

    const $divsEventos = document.querySelectorAll('.eventos-flujo div')
    
    function flujoEventos(e) {
        console.log(
            `Hola te saluda ${this.className}, el click lo origino ${e.target.className}`
        );
        
        e.stopPropagation();
    };

    $divsEventos.forEach(div => {
        div.addEventListener('click', flujoEventos)
        // div.addEventListener('click', flujoEventos, false)
        // div.addEventListener('click', flujoEventos, true)
    });
    
    const $linkEventos = document.querySelector(".eventos-flujo a")

    $linkEventos.addEventListener("click", (e) => {
        alert("Hola soy jonM.com")
        e.preventDefault()
        e.stopPropagation();
    });
    
    */
}

/* //* DOM: Delegación de Eventos */ {

    /*
    // const $divsEventos = document.querySelectorAll('.eventos-flujo div'),
    //     $linkEventos = document.querySelector(".eventos-flujo a")

    function flujoEventos(e) {
        console.log(
            `Hola te saluda ${this}, el click lo origino ${e.target.className}`
        );
        
        // e.stopPropagation();
    };

    document.addEventListener("click", (e) => {
        console.log("Click en", e.target);

        if (e.target.matches(".eventos-flujo div")) {
            flujoEventos(e)
        }

        if (e.target.matches(".eventos-flujo a")) {
            alert("Hola soy jonM.com")
            e.preventDefault()
        }
    })

    // $divsEventos.forEach(div => {
    //     div.addEventListener('click', flujoEventos)
    // });

    // $linkEventos.addEventListener("click", (e) => {
    //     alert("Hola soy jonM.com")
    //     e.preventDefault()
    //     e.stopPropagation();
    // });
    */

}

/* //* BOM: Propiedades y Eventos */ {

    /*
    window.addEventListener("resize", (e) => {
        // console.clear();
        console.log("********** Evento Resize **********");
        console.log(window.innerWidth);
        console.log(window.innerHeight);
        // console.log(window.outerWidth);
        // console.log(window.outerHeight);
        // console.log(e);
    })

    window.addEventListener("scroll", (e) => {
        console.clear();
        console.log("********** Evento Scroll **********");
        console.log(window.scrollX);
        console.log(window.scrollY);
        console.log(e);
    });
    
    window.addEventListener("load", (e) => {
        // console.clear()
        console.log("********** Evento Load **********");
        console.log(window.screenX);
        console.log(window.screenY);
        console.log(e);
    });
    
    document.addEventListener("DOMContentLoaded", (e) => {
        console.log("********** Evento DOMContentLoaded **********");
        console.log(window.screenX);
        console.log(window.screenY);
        console.log(e);
    });
    */

}

/* //* BOM: Metodos */ {

    const $btnAbrir = document.getElementById("abrir-ventana"),
        $btnCerrar = document.getElementById("cerrar-ventana"),
        $btnImprimir = document.getElementById("imprimir-ventana")

    let ventana;

    $btnAbrir.addEventListener("click", (e) => {
        ventana = window.open("https://jonmircha.com")
        // open("https://jonmircha.com")
    })

    $btnCerrar.addEventListener("click", (e) => {
        // window.close();
        ventana.close()
    })
    $btnImprimir.addEventListener("click", (e) => {
        window.print();
    })
}

/* //* BOM: Objetos: URL Historial y Navegador */ {

    /*
    console.log(window.location);
    console.log("******** Objeto URL (Location) ********");
    console.log(location.origin); // 127.0.0.1:5500
    console.log(location.protocol); // http:
    console.log(location.host);     // 127.0.0.1:5500
    console.log(location.hostname); // 127.0.0.1
    console.log(location.port);     // 5500
    console.log(location.href);     // http://127.0.0.1:5500/dom.html
    console.log(location.hash);     // [url]#...
    console.log(location.search);   // [url]?...=...
    
    console.log(location.pathname); // dom.html
    // location.reload() (reload infinito)
    */
    
    /*
    console.log("******** Objeto Historial (history) ********");
    console.log(window.history);
    console.log(history.length);
    console.log(history.back(4));
    console.log(history.forward(3));
    console.log(history.go(-1));
    */
    
    /*
    console.log("******** Objeto Navegador (navigator) ********");
    console.log(navigator);
    console.log(navigator.connection);
    console.log(navigator.geolocation);
    console.log(navigator.mediaDevices);
    console.log(navigator.mimeTypes); // deprecated.
    console.log(navigator.onLine);
    console.log(navigator.serviceWorker);
    console.log(navigator.storage);
    console.log(navigator.usb);
    console.log(navigator.userAgent);
    */
}