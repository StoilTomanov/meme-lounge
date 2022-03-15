import { logoutRequest } from '../crud.js';
import { page } from '../lib.js'

export async function logoutFunc(ev) {
    await logoutRequest(sessionStorage.accessToken);
    page.redirect('/home');
}