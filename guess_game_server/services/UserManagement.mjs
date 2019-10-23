export let users = [];
export const ERR_DUPLICATED_USER='ERR_DUPLICATED_USER';

export const register = (username) => {
    if (existsUser(username)) throw ERR_DUPLICATED_USER;
    else users.push(username);
}

export const existsUser = (username)  => {
    return users.find((item)=>item==username)!=undefined;
}

export const getAllUsers = () => users;