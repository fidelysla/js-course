const d = document;

export default function slider() {

    const $nextBtn = d.querySelector(".slider-btns .next"),
        $prevBtn = d.querySelector(".slider-btns .prev"),
        $slides = d.querySelectorAll(".slider-slide");
    
    let i = 0;
    let intervalID;

    function startInterval(direction) {

        clearInterval(intervalID)

        intervalID = setInterval(() => {

            $slides[i].classList.remove("active");

            if (direction === "prev") {
                i--;
                if (i < 0) {
                    i = $slides.length - 1;
                }
            }

            if (direction === "next") {
                i++;
                if (i >= ($slides.length)) {
                    i = 0;
                }
            }

            $slides[i].classList.add("active")
            
        }, 2500)
    }
    
    d.addEventListener("click", (e) => {

        switch (e.target) {
            case $prevBtn:
                e.preventDefault();
                startInterval("prev")
                break;
            case $nextBtn:
                e.preventDefault();
                startInterval("next")
                break;
            default:
                break;
        }

    })

    // startInterval("next")
}