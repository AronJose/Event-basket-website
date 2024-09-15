import * as service from './service'
import { toast } from 'react-toastify';


export const Common = {
    state: {
        category: [],
        service:[]
    },
    reducers: {
        onCategoriesSuccess: (state, category) => {
            return {
                ...state,
                category: category
            };
        },

        onServicesSuccess: (state, service) => {
            return {
                ...state,
                service: service
            };
        },

        onLogoutSuccess:(state,logouts)=>{
            return {
                ...state,
                logouts: logouts
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
        async categories(payload) {
            try {
                let getCategory = await service.categories(payload);
                this.onCategoriesSuccess(getCategory);
                return getCategory;
            }
            catch (e) {
                console.log("inside catch of add user", e.response)
                this.displayError(e.response)
            }
        },

        async services(payload) {
            try {
                let getCategory = await service.services(payload);
                this.onServicesSuccess(getCategory);
                return getCategory;
            }
            catch (e) {
                console.log("inside catch of add user", e.response)
                this.displayError(e.response)
            }
        },
        async logout(payload) {
            try {
                let logoutData = await service.logout(payload);
                this.onLogoutSuccess(logoutData);
                return logoutData;
            }
            catch (e) {
                console.log("inside catch of add user", e.response)
                this.displayError(e.response)
            }
        },
    })
}