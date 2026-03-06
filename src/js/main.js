const keysPressed = {};
const sequence = [];
const targetSequence = ['s', 'k', 'y', 'n', 'e', 't'];

const accionPage = document.querySelector('#accion');

if (accionPage) {
    document.addEventListener('keydown', (event) => {
        keysPressed[event.key] = true;

        if (event.key.length === 1) {
            sequence.push(event.key.toLowerCase());

            if (sequence.length > 6) {
                sequence.shift();
            }

            if (sequence.join('') === 'skynet') {
            
                if (confirm('SKYNET ACTIVADO. ¿Deseas abrir el panel de control de skynet?')) {
                    window.location.href = 'https://cyberdyne-skynet.netlify.app/login';
                }
                sequence.length = 0;
            }
        }
    });

    document.addEventListener('keyup', (event) => {
        delete keysPressed[event.key];
    });
}
