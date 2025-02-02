
import scrollTopButton from "./dom/boton_scroll.js";
import countdown from "./dom/cuenta_regresiva.js";
import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { moveBall, shortcuts } from "./dom/teclado.js";
import darkTheme from "./dom/tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    console.clear()
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("#alarm", "/assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    // countdown("countdown", "Feb 06, 2025 12:00:00", "Feliz Cumpleaños, Gael 🎂");
    scrollTopButton(".scroll-top-btn");
})

d.addEventListener("keydown", (e) => {
    console.clear()
    shortcuts(e)
    // moveBall(e, ".ball", ".stage")
})

darkTheme(".dark-theme-btn", "dark-mode")