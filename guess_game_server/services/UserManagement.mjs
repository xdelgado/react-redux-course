export let users = [];
export const ERR_DUPLICATED_USER='ERR_DUPLICATED_USER';

export const register = (username) => {
    if (users.find((item)=>item==username)!=undefined) throw ERR_DUPLICATED_USER;
    else users.push(username);
}

export const getAllUsers = () => users;