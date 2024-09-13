import config from '../../config/config';
import { api } from '../../Helper/axios';


export async function getEvents(payload) {
    let queryParam = '';

    if (payload) {
      const params = [];
  
      if (payload.search) params.push(`search=${payload.search}`);
      if (payload.category) params.push(`category=${payload.category}`);
      if (payload.service) params.push(`service=${payload.service}`);
  
  
      if (params.length > 0) {
        queryParam = `?${params.join('&')}`;
      }
    }
    return api()
        .get(`${config.routes.events}${queryParam}`)
        .then((res) => res.data)
}



