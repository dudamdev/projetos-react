import axios from "axios";

export function findUser(userGH: string) {
    return axios.get(`https://api.github.com/users/${userGH}`)
}