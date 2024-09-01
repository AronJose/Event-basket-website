import * as service from './service'
import { toast } from 'react-toastify';


export const Events = {
    state: {
        Events: [],
    },
    reducers: {
        onGetEventsSuccess: (state, Events) => {
            return {
                ...state,
                Events: Events
            };
        },
        displayError: (state, error) => {
            return toast(' 🚀' + error.data.error.errors[0].message, {
                position: "top-right",
                theme: 'light'
            });
        },
    },
    effects: () => ({
        async getEvents(payload) {
            try {
                let createUser = await service.getEvents(payload);
                this.onGetEventsSuccess(createUser);
                return createUser;
            }
            catch (e) {
                console.log("inside catch of add user", e.response)
                this.displayError(e.response)
            }
        },
       

    })
}
