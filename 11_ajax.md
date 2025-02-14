# Fundamentos JavaScript

1.  [Tipos de Datos](01_tipos_de_datos.md)
1.  [Estructuras Control](02_estructuras_control.md)
1.  [Programacion Orientada a Objetos](03_poo.md)
1.  [Objetos y funciones del Lenguaje](04_objetos_y_funciones.md)
1.  [Ejercicios de Logica de Programación](05_ejercicios_logica.md)
1.  [Programacion Asincrona](06_programacion_asincrona.md)
1.  [Nuevos Tipos y Caracteristicas](07_nuevos_tipos_y_caracteristicas.md)
1.  [This, Call, Apply y Bind](08_this_call_apply_bind.md)
1.  [JSON - JavaScript Object Notation](09_json.md)
1.  [DOM - Document Object Model](10_dom.md)
1.  [AJAX - Asynchronous JavaScript & XML](11_ajax.md)

## AJAX Asynchronous JavaScript and XML

> -   [Metodos Nativos](11_ajax.md#metodos-nativos)
> -   [Librerias Externas](11_ajax.md#librerias-externas)
> -   [\*](11_ajax.md)

![AJAX](assets/img/ajax.png)

### Metodos Nativos

-   [ActiveXObject (IE8 e inferiores)]()
-   [XMLHttpRequest]()
-   [API Fetch]()

### Librerias Externas

-   [jQuery.ajax()]()
-   [Axios]()
-   etc.

**_Ajax_** no es una tecnología en sí mismo. En realidad, se trata de varias tecnologías independientes que se unen:

-   **HTML** y **CSS**, Para crear una presentación basada en estándares.
-   **DOM**, para la interacción y manipulación dinámica de la presentación.
-   **HTML**, **XML**, **JSON**, para el intercambio y la manipulación de información.
-   **XMLHttpRequest** o **Fetch**, para el intercambio asíncono de información.
-   **JavaScript**, para unir todas las demás tecnologías.
-   **Estado de la petición**
    -   _*READY_STATE_UNINITIALIZED = 0*_
    -   _*READY_STATE_LOADIND = 1*_
    -   _*READY_STATE_LOADED = 2*_
    -   _*READY_STATE_INTERACTIVE = 3*_
    -   _*READY_STATE_COMPLETE = 4*_
-   **Códigos de Estado de respuesta HTTP**
    -   Respuestas Informativas **_(100-199)_**
    -   Respuestas satisfactorias **_(200-299)_**
    -   Redirecciones **_(300-399)_**
    -   Errores de los clientes **_(400-499)_**
    -   Errores de los servidores **_(500-599)_**

<br>
<br>
<br>
<br>
<br>
<br>
