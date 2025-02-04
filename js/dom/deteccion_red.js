

const d = document,
    w = window,
    n = navigator;

export default function networkStatus() {
    const isOnLine = () => {
        const $div = d.createElement("div")

        if (n.onLine) {
            // console.log("Conexión Reestablecidad");
            $div.textContent = "Conexión Reestablecidad";
            $div.classList.add("online");
            $div.classList.remove("offline")
        } else {
            // console.log("Conexión Perdida");
            $div.textContent = "Conexión Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online")
        };

        d.body.insertAdjacentElement("afterbegin", $div)
        setTimeout( () => d.body.removeChild($div), 2500)
    }

    isOnLine()
    // w.addEventListener("online", (e) => isOnLine());
    // w.addEventListener("offline", (e) => isOnLine());
}