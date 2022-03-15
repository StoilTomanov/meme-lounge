import { registerRequest } from "../crud.js";
import { page } from '../lib.js'
import { notify } from "../views/notification.js";

export async function registerForm(ev) {
    ev.preventDefault()
    const form = document.getElementById(ev.target.id);
    const formData = new FormData(form);
    const credentials = {
        username: formData.get('username').trim(),
        email: formData.get('email').trim(),
        password: formData.get('password').trim(),
        gender: formData.get('gender'),
    }
    if (credentials.email != '' && credentials.password != '' && credentials.username != '') {
        if (formData.get('password').trim() != formData.get('repeatPass').trim()) {
            window.alert('Passwords don\'t match!');
        }
        await registerRequest(credentials);
        page.redirect('/allmemes');
    } else {
        return notify('All fields are mandatory!');
    }
}