export function getUserData() {
    return sessionStorage;
}

export function setUserData(email, password, username, gender, accessToken, _id) {
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('password', password);
    sessionStorage.setItem('gender', gender);
    sessionStorage.setItem('accessToken', accessToken);
    sessionStorage.setItem('id', _id);
}

export function deleteUserData(email, password, username, gender, accessToken, _id) {
    sessionStorage.removeItem('email', email);
    sessionStorage.removeItem('password', password);
    sessionStorage.removeItem('username', username);
    sessionStorage.removeItem('gender', gender);
    sessionStorage.removeItem('accessToken', accessToken);
    sessionStorage.removeItem('id', _id);
}