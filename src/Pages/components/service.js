import config from '../../config/config';
import { api } from '../../Helper/axios';


export async function getEvents(payload) {
    return api()
        .get(config.routes.events, payload)
        .then((res) => res.data)
}



