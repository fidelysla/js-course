import scrollTopButton from './dom/boton_scroll.js';
import slider from './dom/carrusel.js';
import countdown from './dom/cuenta_regresiva.js';
import userDeviceInfo from './dom/deteccion_dispositivo.js';
import networkStatus from './dom/deteccion_red.js';
import webCam from './dom/deteccion_webcam.js';
import searchFilters from './dom/filtro_busquedas.js';
import getGeolocation from './dom/geolocalizacion.js';
import hamburgerMenu from './dom/menu_hamburguesa.js';
import speechReader from './dom/narrador.js';
import responsiveMedia from './dom/objeto_responsive.js';
import responsiveTester from './dom/prueba_responsive.js';
import { digitalClock, alarm } from './dom/reloj.js';
import scrollSpy from './dom/scroll_espia.js';
import draw from './dom/sorteo.js';
import { moveBall, shortcuts } from './dom/teclado.js';
import darkTheme from './dom/tema_oscuro.js';
import contactFormValidations from './dom/validaciones_formulario.js';
import contactForm from './dom/validaciones_formulario.js';
import smartVideo from './dom/video_inteligente.js';

const d = document;

d.addEventListener('DOMContentLoaded', (e) => {
    // console.clear();

    hamburgerMenu('.panel-btn', '.panel', '.menu a');

    digitalClock('#reloj', '#activar-reloj', '#desactivar-reloj');

    alarm(
        '#alarm',
        '/assets/alarma.mp3',
        '#activar-alarma',
        '#desactivar-alarma'
    );

    // countdown("countdown", "Jun 05, 2025 12:00:00", "Feliz Cumpleaños, Carlos");

    scrollTopButton('.scroll-top-btn');

    responsiveMedia(
        'youtube',
        '(min-width: 1024px)',
        'Contenido Movil',
        'Contenido Escritorio'
    );

    // responsiveMedia(
    //     'gmaps',
    //     '(min-width: 1024px)',
    //     'Contenido Movil',
    //     'Contenido Escritorio'
    // );

    responsiveTester('responsive-tester');

    userDeviceInfo('user-device');

    // networkStatus();

    // webCam("webcam");

    // getGeolocation("geolocation")

    searchFilters('.card-filter', '.card');

    draw('#winner-btn', '.player');

    // slider();

    scrollSpy();

    // smartVideo()

    contactFormValidations()
});

d.addEventListener('keydown', (e) => {
    // console.clear();
    shortcuts(e);
    // moveBall(e, ".ball", ".stage")
});

darkTheme('.dark-theme-btn', 'dark-mode');

// networkStatus();

speechReader();
