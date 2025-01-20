import * as service from './service'
import { toast } from 'react-toastify';


export const Events = {
    state: {
        Events: [],
        event:[]
    },
    reducers: {
        onGetEventsSuccess: (state, Events) => {
            return {
                ...state,
                Events: Events
            };
        },
        onSubEventDataSuccess: (state, subEventData) => {
            return {
                ...state,
                subEventData: subEventData
            };
        },
        onImageUploadSuccess: (state, image) => {
            return {
                ...state,
                image: image
            };
        },

        onEventCreationSuccess: (state, event) => {
            return {
                ...state,
                event: event
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
        async subEventData(payload) {
            try {
                let providerData = await service.subEventData(payload);
                this.onSubEventDataSuccess(providerData);
                return providerData;
            }
            catch (e) {
                console.log("inside catch of add user", e.response)
                this.displayError(e.response)
            }
        },

        async imageUpload(payload) {
            try {
                let imageData = await service.imageUpload(payload);
                this.onImageUploadSuccess(imageData);
                return imageData;
            }
            catch (e) {
                console.log("inside catch of add user", e.response)
                this.displayError(e.response)
            }
        },

        async eventCreation(payload) {
            try {
                let EventData = await service.eventCreation(payload);
                this.onEventCreationSuccess(EventData);
                return EventData;
            }
            catch (e) {
                console.log("inside catch of add user", e.response)
                this.displayError(e.response)
            }
        },
       

    })
}
