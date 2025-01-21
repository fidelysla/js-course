
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
    
}