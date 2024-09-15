import config from '../config/config';
import { api } from '../Helper/axios';


export async function categories(payload) {
    return api()
        .get(config.routes.category, payload)
        .then((res) => res.data)
}

export async function services(payload) {
    return api()
        .get(config.routes.service, payload)
        .then((res) => res.data)
}

export async function logout(payload) {
    return api()
        .get(config.routes.logout, payload)
        .then((res) => res.data)
}
