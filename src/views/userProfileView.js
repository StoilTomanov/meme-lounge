import { root } from "../app.js";
import { userMemes_loggedUser } from "../crud.js";
import { html, render } from "../lib.js";
import { userNav, guestNav } from "../views/nav.js";

export async function showProfileMeme(ctx) {
    const memeList = await userMemes_loggedUser(sessionStorage.id);

    const profileTemplate = html `
    ${sessionStorage.hasOwnProperty('password') ? userNav(sessionStorage.email) : guestNav()}
    <section id="user-profile-page" class="user-profile">
        <article class="user-info">
            <img id="user-avatar-url" alt="user-profile" src="/images/${sessionStorage.gender}.png">
            <div class="user-content">
                <p>Username: ${sessionStorage.username}</p>
                <p>Email: ${sessionStorage.email}</p>
                <p>My memes count: ${memeList.length}</p>
            </div>
        </article>
        <h1 id="user-listings-title">User Memes</h1>
        <div class="user-meme-listings">
            <!-- Display : All created memes by this user (If any) -->
            ${memeList.length == 0 ? html`<p class="no-memes">No memes in database.</p>` : html`
                ${memeList.map( item => 
                    html`
                    <div class="user-meme">
                        <p class="user-meme-title">${item.title}</p>
                        <img class="userProfileImage" alt="meme-img" src=${item.imageUrl}>
                        <a class="button" href="/details/${item._id}">Details</a>
                    </div>
                    `
                )}
            `}           
        </div>
    </section>
`
    render(profileTemplate, root)
}