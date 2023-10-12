const typewriter = document.getElementById('typewriter');
const typewriter2 = document.getElementById('typewriter2');
const text = "Olá, bem-vindo ao meu portfólio. Eu sou o Rui e utilizo várias tecnologias, como JavaScript, TypeScript, Dart, Flutter, Next.js, MongoDB, Firebase, Go Language e Docker. Aprendi quase tudo autonomamente, mas também adquiri conhecimento em algumas áreas durante o meu estágio na Critical Software, onde aprendi a utilizar Git, Go Language e Docker.";
const text2 = "asdasdasdasdasd"

let index = 0;

function type() {
    if (index < text.length) {
        typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
        index++;
        setTimeout(type, Math.random() * 150 + 50);
    } else {
        typewriter.innerHTML = text.slice(0, index) + '<span class="blinking-cursor">|</span>';
    }
}

type();

let index2 = 0;

function type2() {
    if (index < text2.length) {
        typewriter2.innerHTML = text2.slice(0, index2) + '<span class="blinking-cursor">|</span>';
        index2++;
        setTimeout(type2, Math.random() * 150 + 50);
    } else {
        typewriter2.innerHTML = text2.slice(0, index2) + '<span class="blinking-cursor">|</span>';         
    }
}

type2();