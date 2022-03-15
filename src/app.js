import { page } from './lib.js'
import { showHome } from './views/homeView.js'
import { showLogin } from './views/loginView.js';
import { showRegister } from './views/registerView.js';
import { showAllMemes } from './views/allMemesView.js';
import { showCreateMeme } from './views/createMemeView.js';
import { showEditMeme } from './views/editMemeView.js';
import { showDetails } from './views/detailsMemeView.js';
import { showProfileMeme } from './views/userProfileView.js';

export const root = document.getElementById('main');

if (sessionStorage.hasOwnProperty('password')) {
    page.redirect('/', '/allmemes');
} else {
    page.redirect('/', '/home');
}

page('/home', showHome);
page('/login', showLogin);
page('/register', showRegister);
page('/allmemes', showAllMemes);
page('/create', showCreateMeme);
page('/edit/:id', showEditMeme);
page('/details/:id', showDetails);
page('/myprofile', showProfileMeme);

page.start();