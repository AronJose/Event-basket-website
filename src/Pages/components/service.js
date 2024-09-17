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

export async function subEventData(payload) {
  return api()
      .get(config.routes.provider, payload)
      .then((res) => res.data)
}

export async function imageUpload(payload) {
  const formData = new FormData();

  if (Array.isArray(payload)) {
    payload.forEach((file, index) => {
      formData.append('images', file); 
    });
  } else {
    formData.append("images", payload); 
  }

  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  return api()
    .post(config.routes.multiImage, formData, { headers })
    .then((res) => res.data);
}

export async function eventCreation(payload) {
  return api()
      .post(config.routes.eventCreation, payload)
      .then((res) => res.data)
}


