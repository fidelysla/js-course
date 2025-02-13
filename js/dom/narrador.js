


const d = document,
    w = window;

export default function speechReader() {
    const $speechSelect = d.getElementById("speech-select"),
        $speechTextarea = d.getElementById("speech-text"),
        $speecnBtn = d.getElementById("speech-btn"),
        speechMessage = new SpeechSynthesisUtterance();
    
    // console.log(speechMessage);
    
    let voices = [];

    d.addEventListener("DOMContentLoaded", e => {
        // console.log(w.speechSynthesis);
        // console.log(w.speechSynthesis.getVoices());

        w.speechSynthesis.addEventListener("voiceschanged", e => {
            // console.log(e);
            voices = w.speechSynthesis.getVoices()
            console.log(voices);

            voices.forEach(voice => {
                const $option = d.createElement("option")
                $option.value = voice.name;
                $option.textContent = `${voice.name} - ${voice.lang}`;

                $speechSelect.appendChild($option)
            });
        
        });
        
    });

    d.addEventListener("change", (e) => {
        console.log(e.target.value);
        
        if (e.target === $speechSelect) {
            speechMessage.voice = voices.find(voice => voice.name === e.target.value);
        }
        console.log(speechMessage);
        
    });

    d.addEventListener("click", e => {
        if (e.target === $speecnBtn) {
            speechMessage.text = $speechTextarea.value;
            w.speechSynthesis.speak(speechMessage);
        }
    });



}