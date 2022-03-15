const el = document.getElementById('errorBox');
const result = document.querySelector('span');

export function notify(msg) {

    result.textContent = msg;
    el.style.display = 'block';

    setTimeout(timeout, 3000);

    function timeout() {
        return el.style.display = 'none';
    }
}