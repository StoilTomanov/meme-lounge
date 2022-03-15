import { loginRequest } from '../crud.js';
import { page } from '../lib.js'
import { notify } from '../views/notification.js';

export async function loginForm(ev) {
    ev.preventDefault()
    const form = document.getElementById(ev.target.id);
    const formData = new FormData(form);
    const credentials = {
        email: formData.get('email').trim(),
        password: formData.get('password').trim(),
    }
    if (credentials.email != '' && credentials.password != '') {
        await loginRequest(credentials);
        page.redirect('/allmemes');
    } else {
        return notify('All fields are mandatory!');
    }
}