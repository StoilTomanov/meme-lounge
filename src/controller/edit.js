import { editMeme_loggedUser } from '../crud.js';
import { page } from '../lib.js'
import { notify } from '../views/notification.js';

export async function editMeme(ev) {
    ev.preventDefault()
    const editId = ev.target.dataset.urlid;
    const form = document.getElementById(ev.target.id)
    const formData = new FormData(form)
    const formDetails = {
        title: formData.get('title').trim(),
        description: formData.get('description').trim(),
        imageUrl: formData.get('imageUrl').trim(),
    }
    if (formDetails.title != '' && formDetails.description != '' && formDetails.imageUrl != '') {
        await editMeme_loggedUser(editId, formDetails, sessionStorage.accessToken);
        page.redirect('/details/' + editId);
    } else {
        return notify('All fields are mandatory!');
    }
}