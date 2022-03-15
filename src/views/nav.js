import { logoutFunc } from "../controller/logout.js";
import { html } from "../lib.js";

export function guestNav() {
    return html `
    <nav>
        <a href="/allmemes">All Memes</a>
        <div class="guest">
            <div class="profile">
                <a href="/login">Login</a>
                <a href="/register"}>Register</a>
            </div>
            <a class="active" href="/home">Home Page</a>
        </div>
    </nav>
    `
}

export function userNav(email) {
    return html `
    <nav>
        <a href="/allmemes">All Memes</a>
        <div class="user">
            <a href="/create">Create Meme</a>
            <div class="profile">
                <span>Welcome, ${email}</span>
                <a href="/myprofile">My Profile</a>
                <a href="javascript:void(0)" @click=${logoutFunc}>Logout</a>
            </div>
        </div>
    </nav>
    `
}