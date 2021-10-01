import axios from "axios";

let userApi = {
    getAllUsers: getAllUsers
}

function getAllUsers() {
    return axios.get('https://localhost:44331/api/user');
}

export default userApi;