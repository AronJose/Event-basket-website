import config from '../../config/config';
import { api } from '../../Helper/axios';


export async function SignUp(payload) {
    return api()
        .post(config.routes.SignUp, payload)
        .then((res) => res.data)
}

export async function loginUser(payload) {
    return api()
        .post(config.routes.login, payload)
        .then((res) => res.data)

}

export async function Roles(payload) {
    return api()
        .get(config.routes.roles, payload)
        .then((res) => res.data)
}

export async function RoleById(payload) {
    console.log(payload,"payload")
    return api()
        .get(`${config.routes.role}?role_id=${payload}`)
        .then((res) => res.data)

}
