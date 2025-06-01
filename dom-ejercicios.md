# Ejercicios DOM

## Index-dom

```JAVASCRIPT
// index_dom.js
// import scrollTopButton from './dom/boton_scroll.js';
// import slider from './dom/carrusel.js';
// import countdown from './dom/cuenta_regresiva.js';
// import userDeviceInfo from './dom/deteccion_dispositivo.js';
// import networkStatus from './dom/deteccion_red.js';
// import webCam from './dom/deteccion_webcam.js';
// import searchFilters from './dom/filtro_busquedas.js';
// import getGeolocation from './dom/geolocalizacion.js';
import hamburgerMenu from './dom/menu_hamburguesa.js';
// import speechReader from './dom/narrador.js';
// import responsiveMedia from './dom/objeto_responsive.js';
// import responsiveTester from './dom/prueba_responsive.js';

import { digitalClock, alarm } from './dom/reloj.js';

// import scrollSpy from './dom/scroll_espia.js';
// import draw from './dom/sorteo.js';
// import { moveBall, shortcuts } from './dom/teclado.js';
// import darkTheme from './dom/tema_oscuro.js';
// import contactFormValidations from './dom/validaciones_formulario.js';
// import contactForm from './dom/validaciones_formulario.js';
// import smartVideo from './dom/video_inteligente.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {

    hamburgerMenu('.panel-btn', '.panel', '.menu a');

    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');

    alarm('#alarm', '/assets/alarma.mp3',
          '#activar-alarma', '#desactivar-alarma');

    // countdown("countdown",
    //           "Jun 05, 2025 12:00:00",
    //           "Feliz Cumpleaños");

    // scrollTopButton('.scroll-top-btn');

    // responsiveMedia(
    //     'youtube',
    //     '(min-width: 1024px)',
    //     'Contenido Movil',
    //     'Contenido Escritorio'
    // );

    // responsiveMedia(
    //     'gmaps',
    //     '(min-width: 1024px)',
    //     'Contenido Movil',
    //     'Contenido Escritorio'
    // );

});

// d.addEventListener('keydown', (e) => {

//     shortcuts(e);

//     moveBall(e, ".ball", ".stage")
// });
```

## Hamburger Button

```HTML
<button class="panel-btn hamburger hamburger--vortex" type="button">
    <span class="hamburger-box">
        <span class="hamburger-inner">🔍</span>
    </span>
</button>
```

```JAVASCRIPT
// dom/menu_hamburguesa.js
export default function hamburgerMenu(panelBtn, panel, menuLink) {
    const d = document;

    d.addEventListener("click", e => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")
        }

        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove("is-active")
            d.querySelector(panelBtn).classList.remove("is-active")
        }
    })
}
```

## Reloj Digital y Alarma Sonora

```HTML
<div id="reloj"></div>
<div id="alarm"></div>
<div>
    <button id="activar-reloj">Iniciar Reloj</button>
    <button id="desactivar-reloj">Detener Reloj</button>

    <button id="activar-alarma">Iniciar Alarma</button>
    <button id="desactivar-alarma">Detener Alarma</button>
</div>
```

```JAVASCRIPT
const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
    let clockTempo;

    d.addEventListener("click", e => {
        if (e.target.matches(btnPlay)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString()
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            }, 1000);

            e.target.disabled = true
        }
        if (e.target.matches(btnStop)) {
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            document.querySelector(btnPlay).disabled = false
        }
    })
}

export function alarm(alarm, sound, btnPlay, btnStop) {
    let alarmTempo;
    const $alarm = d.createElement("audio")
    $alarm.src = sound

    d.addEventListener("click", e => {
        if (e.target.matches(btnPlay)) {
            alarmTempo = setTimeout(() => {
                d.querySelector(alarm).appendChild($alarm)
                $alarm.controls = true
                $alarm.play();
            }, 500);
            e.target.disabled = true
        }
        if (e.target.matches(btnStop)) {
            clearTimeout(alarmTempo)
            $alarm.pause();
            $alarm.controls = false
            $alarm.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;
            $alarm.remove()
        }
    })
}
```
