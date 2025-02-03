

// responsible responsive design mediaQuery
const d = document,
    w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {

    let breakpoint = w.matchMedia(mq);

    // console.log(breakpoint);
    
    const responsive = e => {
        if (e.matches) {
            d.getElementById(id).innerHTML = desktopContent;
            // console.log("1024", e.matches);
        } else {
            d.getElementById(id).innerHTML = mobileContent;
            // console.log("1024", e.matches);
        }
        // console.log(e.matches);
    };
    
    // breakpoint.addListener(responsive) // addListener (deprecated)
    breakpoint.addEventListener("change", responsive);

    responsive(breakpoint);
}
