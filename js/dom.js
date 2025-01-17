
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

/* //* Itroduccion DOM */ {

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

    //? VARIABLES CSS - CUSTOM PROPERTIES CSS;
    const $html = document.documentElement, $body = document.body;
    
    let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
    let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
    // console.log(varDarkColor, varYellowColor); // #222 #F7DF1E

    //?Establecer colores al body
    // $body.style.backgroundColor = varDarkColor
    // $body.style.color = varYellowColor

    // $html.style.setProperty("--dark-color", "#000")
    // console.log(varDarkColor); //#-222
    // varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
    // console.log(varDarkColor);
    // $body.style.setProperty("background-color", varDarkColor)

}


/* //* DOM: CLases CSS */ {

    // Nos traemos la primera card (tech)
    const $card = document.querySelector(".card")
    console.log($card); // <figure class="card">…</figure>
    console.log($card.className); //card
    console.log($card.classList); //DOMTokenList ['card', value: 'card']
}
