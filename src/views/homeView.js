import { root } from '../app.js';
import { html, render } from "../lib.js";
import { userNav, guestNav } from "../views/nav.js";

export function showHome() {
    const homeTemplate = html `
    ${sessionStorage.hasOwnProperty('password') ? userNav(sessionStorage.email) : guestNav()}
    <section id="welcome">
        <div id="welcome-container">
            <h1>Welcome To Meme Lounge</h1>
            <img src="/images/welcome-meme.jpg" alt="meme">
            <h2>Login to see our memes right away!</h2>
            <div id="button-div">
                <a href="/login" class="button">Login</a>
                <a href="/register" class="button">Register</a>
            </div>
        </div>
    </section>
`
    render(homeTemplate, root)
}