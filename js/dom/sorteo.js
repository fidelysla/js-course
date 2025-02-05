const d = document;

export default function draw(btn, selector) {

    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
            random = Math.floor(Math.random() * $players.length),
            winner = $players[random];

        // console.log($players, random, winner);

        return `El ganador es: <b>${winner.textContent}</b>`;
    };

    const $div = d.createElement('div');
    $div.classList.toggle("winner")
    const $br = d.createElement('br');

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn)) {

            $div.remove();

            let result = getWinner(selector);

            d.querySelector(btn).insertAdjacentElement('beforebegin', $div);

            $div.innerHTML = `${result}`;

            d.querySelector(btn).insertAdjacentElement("beforebegin", $br)
        }
    });

    const getWinnerComment = (selector) => {
        const $players = d.querySelectorAll(selector),
            random = Math.floor(Math.random() * $players.length),
            winner = $players[random];

        return `El ganador es: ${winner.textContent}`;
    };
}
