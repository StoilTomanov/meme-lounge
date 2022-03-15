import * as storage from './session.js'
import { notify } from './views/notification.js';

export async function loginRequest(userData) {
    const url = 'http://localhost:3030/users/login';
    try {
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message)
        }
        if (response.status == 403) {
            const error = await response.json()
            return notify(error);
        }
        if (response.status != 200 && response.status != 403) {
            const error = await response.json()
            return notify(error);
        }
        const data = await response.json();
        storage.setUserData(userData.email, userData.password, data.username, data.gender, data.accessToken, data._id)
    } catch (error) {
        return notify(error);
    }
}

export async function registerRequest(userData) {
    const url = 'http://localhost:3030/users/register';
    try {
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        if (!response.ok) {
            const error = await response.json()
            return notify(error);
        }
        if (response.status == 403) {
            const error = await response.json()
            return notify(error);
        }
        if (response.status != 200 && response.status != 403) {
            const error = await response.json()
            return notify(error);
        }
        const data = await response.json();
        console.log(data);
        storage.setUserData(data.email, data.password, data.username, data.gender, data.accessToken, data._id)
    } catch (error) {
        window.alert(error.message);
        throw new Error(error.message);
    }
}

export async function logoutRequest(accessToken) {
    const url = 'http://localhost:3030/users/logout';
    try {
        const response = await fetch(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            },
        });
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        storage.deleteUserData(sessionStorage.email, sessionStorage.password, sessionStorage.username, sessionStorage.gender, sessionStorage.accessToken, sessionStorage.id);
    } catch (error) {
        window.alert(error.message);
        throw new Error(error.message);
    }
}

export async function createMemeRequest(memeDetails, accessToken) {
    const url = 'http://localhost:3030/data/memes';
    try {
        const response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            },
            body: JSON.stringify(memeDetails),
        });
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        if (response.status != 200) {
            throw new Error('Something went wrong!');
        }
        const data = await response.json();
    } catch (error) {
        window.alert(error.message);
        throw new Error(error.message);
    }
}

export async function allMemesRequest_allUsers() {
    const url = 'http://localhost:3030/data/memes?sortBy=_createdOn%20desc';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        if (response.status != 200) {
            throw new Error('Something went wrong!');
        }
        return await response.json();
    } catch (error) {
        window.alert(error.message);
        throw new Error(error.message);
    }
}

export async function memeDetails_allUsers(id) {
    const url = `http://localhost:3030/data/memes/${id}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        if (response.status != 200) {
            throw new Error('Something went wrong!');
        }
        return await response.json();
    } catch (error) {
        window.alert(error.message);
        throw new Error(error.message);
    }
}

export async function editMeme_loggedUser(id, memeDetails, accessToken) {
    const url = `http://localhost:3030/data/memes/${id}`;
    try {
        const response = await fetch(url, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            },
            body: JSON.stringify(memeDetails),
        });
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        if (response.status != 200) {
            throw new Error('Something went wrong!');
        }
        const data = await response.json()
    } catch (error) {
        // window.alert(error.message);
        throw new Error(error.message);
    }
}

export async function deleteMeme_loggedUser(id, accessToken) {
    const url = `http://localhost:3030/data/memes/${id}`;
    try {
        const response = await fetch(url, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            },
        });
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        if (response.status != 200) {
            throw new Error('Something went wrong!');
        }
        const data = await response.json();
    } catch (error) {
        window.alert(error.message);
        throw new Error(error.message);
    }
}

export async function userMemes_loggedUser(userId) {
    const url = `http://localhost:3030/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`;
    try {
        const response = await fetch(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.accessToken,
            },
        });
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        if (response.status != 200) {
            throw new Error('Something went wrong!');
        }
        return await response.json();
    } catch (error) {
        window.alert(error.message);
        throw new Error(error.message);
    }
}