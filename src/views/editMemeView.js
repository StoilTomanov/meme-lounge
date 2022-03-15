import { root } from "../app.js";
import { editMeme } from "../controller/edit.js";
import { memeDetails_allUsers } from "../crud.js";
import { html, render } from "../lib.js";
import { userNav, guestNav } from "../views/nav.js";

export async function showEditMeme(ctx) {
    const oldData = await memeDetails_allUsers(ctx['params'].id)

    const editMemeTemplate = html `
    ${sessionStorage.hasOwnProperty('password') ? userNav(sessionStorage.email) : guestNav()}
    <section id="edit-meme">
        <form id="edit-form" data-urlId=${ctx['params'].id} @submit=${editMeme}>
            <h1>Edit Meme</h1>
            <div class="container">
                <label for="title">Title</label>
                <input id="title" type="text" placeholder="Enter Title" name="title" .value=${oldData.title}>
                <label for="description">Description</label>
                <textarea id="description" placeholder="Enter Description" name="description">
                ${oldData.description} 
                    </textarea>
                <label for="imageUrl">Image Url</label>
                <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${oldData.imageUrl}>
                <input type="submit" class="registerbtn button" value="Edit Meme">
            </div>
        </form>
    </section>
`
    render(editMemeTemplate, root)
}