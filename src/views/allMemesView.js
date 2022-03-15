import { root } from '../app.js';
import { allMemesRequest_allUsers } from '../crud.js';
import { html, render } from "../lib.js";
import { userNav, guestNav } from "../views/nav.js";

export async function showAllMemes() {
    const memeList = await allMemesRequest_allUsers();
    const memeItem = html `
    ${memeList.map( item => html`
            <div class="meme">
                <div class="card">
                    <div class="info">
                        <p class="meme-title">${item.title}</p>
                        <img class="meme-image" alt="meme-img" src=${item.imageUrl}>
                    </div>
                    <div id="data-buttons">
                        <a class="button" href="/details/${item._id}">Details</a>
                    </div>
                </div>
            </div>
            `)}
        `

    const allMemesTemplate = html `
    ${sessionStorage.hasOwnProperty('password') ? userNav(sessionStorage.email) : guestNav()}
    <section id="meme-feed">
        <h1>All Memes</h1>
        <div id="memes">
            <!-- Display : All memes in database ( If any ) -->
            ${memeList.length == 0 ? html`<p class="no-memes">No memes in database.</p>` : memeItem}    
        </div>
    </section>
`
    render(allMemesTemplate, root)
}