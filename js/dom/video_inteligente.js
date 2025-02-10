const d = document,
    w = window;

export default function smartVideo() {
    const $videos = d.querySelectorAll('video[data-smart-video]');

    const cb = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        });
    };

    w.addEventListener('visibilitychange', (e) => {
        if (d.visibilityState !== 'visible') {
            $videos.forEach((video) => video.pause());
        }
    });

    const observer = new IntersectionObserver(cb, { threshold: 0.4 });
    $videos.forEach((el) => observer.observe(el));
}
