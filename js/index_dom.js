import scrollTopButton from './dom/boton_scroll.js';
import countdown from './dom/cuenta_regresiva.js';
import userDeviceInfo from './dom/deteccion_dispositivo.js';
import networkStatus from './dom/deteccion_red.js';
import webCam from './dom/deteccion_webcam.js';
import searchFilters from './dom/filtro_busquedas.js';
import getGeolocation from './dom/geolocalizacion.js';
import hamburgerMenu from './dom/menu_hamburguesa.js';
import responsiveMedia from './dom/objeto_responsive.js';
import responsiveTester from './dom/prueba_responsive.js';
import { digitalClock, alarm } from './dom/reloj.js';
import { moveBall, shortcuts } from './dom/teclado.js';
import darkTheme from './dom/tema_oscuro.js';

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
    
    // countdown("countdown", "Feb 06, 2025 12:00:00", "Feliz Cumpleaños, Gael 🎂");
    
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

    responsiveTester("responsive-tester")

    userDeviceInfo("user-device")

    // networkStatus();

    // webCam("webcam");

    // getGeolocation("geolocation")

    searchFilters(".card-filter", ".card")

});

d.addEventListener('keydown', (e) => {
    // console.clear();
    shortcuts(e);
    // moveBall(e, ".ball", ".stage")
});

darkTheme('.dark-theme-btn', 'dark-mode');

// networkStatus();