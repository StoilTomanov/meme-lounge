import { root } from "../app.js";
import { createMeme } from "../controller/create.js";
import { html, render } from "../lib.js";
import { userNav, guestNav } from "../views/nav.js";

export function showCreateMeme() {
    const createMemeTemplate = html `
    ${sessionStorage.hasOwnProperty('password') ? userNav(sessionStorage.email) : guestNav()}
    <section id="create-meme">
        <form id="create-form" @submit=${createMeme}>
            <div class="container">
                <h1>Create Meme</h1>
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title">
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description"></textarea>
                <label for="imageUrl">Meme Image</label>
                <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
                <input type="submit" class="registerbtn button" value="Create Meme">
            </div>
        </form>
    </section>
`
    render(createMemeTemplate, root)
}