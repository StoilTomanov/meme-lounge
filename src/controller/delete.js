import { deleteMeme_loggedUser } from "../crud.js";
import { page } from '../lib.js'

export async function deleteMeme(ev) {
    await deleteMeme_loggedUser(ev.target.dataset.urlid, sessionStorage.accessToken);
    page.redirect('/allmemes');
}