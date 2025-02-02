

const d = document,
    w = window;

export default function scrollTopButton(btn) {
    const $scrollBtn = d.querySelector(btn)

    w.addEventListener("scroll", (e) => {
        // w.pageXOffset (deprecated)
        let scrollTop = d.documentElement.scrollTop

        if (scrollTop > 68.87893127441) {
            $scrollBtn.classList.remove("hidden")
        } else {
            $scrollBtn.classList.add("hidden")
        }
        // console.log(w.pageXOffset, d.documentElement.scrollTop);
    })

    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            w.scrollTo({
                behavior:"smooth",
                top: 0,
                // left:0,
            })
        }
    })
}