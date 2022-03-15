import { root } from "../app.js";
import { memeDetails_allUsers } from "../crud.js";
import { html, render } from "../lib.js";
import { userNav, guestNav } from "../views/nav.js";
import { deleteMeme } from '../controller/delete.js'

export async function showDetails(ctx) {
    const memeDetails = await memeDetails_allUsers(ctx['params'].id);
    const detailsTemplate = html `
    ${sessionStorage.hasOwnProperty('password') ? userNav(sessionStorage.email) : guestNav()}
    <section id="meme-details">
        <h1>Meme Title: ${memeDetails.title}
        </h1>
        <div class="meme-details">
            <div class="meme-img">
                <img alt="meme-alt" src=${memeDetails.imageUrl}>
            </div>
            <div class="meme-description">
                <h2>Meme Description</h2>
                <p>
                ${memeDetails.description}
                </p>
                ${memeDetails._ownerId == sessionStorage.id ? html `<a class="button warning" href="/edit/${ctx['params'].id}">Edit</a>
                <button class="button danger" data-urlId=${ctx['params'].id} @click=${deleteMeme}>Delete</button>` : null}
            </div>
        </div>
    </section>
`
    render(detailsTemplate, root);
}