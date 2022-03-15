import { root } from "../app.js";
import { loginForm } from "../controller/login.js";
import { html, render } from "../lib.js";
import { userNav, guestNav } from "../views/nav.js";

export function showLogin() {
    const loginTemplate = html `
    ${sessionStorage.hasOwnProperty('password') ? userNav(sessionStorage.email) : guestNav()}
    <section id="login">
        <form id="login-form" @submit=${loginForm}>
            <div class="container">
                <h1>Login</h1>
                <label for="email">Email</label>
                <input id="email" placeholder="Enter Email" name="email" type="text">
                <label for="password">Password</label>
                <input id="password" type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn button" value="Login">
                <div class="container signin">
                    <p>Dont have an account?<a href="/register">Sign up</a>.</p>
                </div>
            </div>
        </form>
    </section>
`
    render(loginTemplate, root);

}