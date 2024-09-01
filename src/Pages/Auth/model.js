import * as service from './service'
import { toast } from 'react-toastify';


export const Auth = {


    state: {
        SignUp: [],
        login: [],
        roles: [],
        role: []
    },
    reducers: {
        onSignUpSuccess: (state, signup) => {
            return {
                ...state,
                SignUp: signup
            };
        },
        onRolesSuccess: (state, roles) => {
            return {
                ...state,
                roles: roles
            }
        },
        onRoleByIdSuccess: (state, role) => {
            return {
                ...state,
                role: role
            }
        },
        displayError: (state, error) => {
            return toast(' 🚀' + error.data.error.errors[0].message, {
                position: "top-right",
                theme: 'light'
            });
        },
        onLoginSuccess: (state, login) => {
            return {
                ...state,
                login: login
            };
        },
        displayLoginError: (state, error) => {
            return toast(' 🚀' + error.data.userdetails.message, {
                position: "top-right",
                theme: 'light'
            });
        },
    },
    effects: () => ({
        async SignUp(payload) {
            try {
                let createUser = await service.SignUp(payload);
                this.onSignUpSuccess(createUser);
                return createUser;
            }
            catch (e) {
                console.log("inside catch of add user", e.response)
                this.displayError(e.response)
            }
        },
        async loginUser(payload) {
            try {
                let login = await service.loginUser(payload);
                this.onLoginSuccess(login);
                return login;
            } catch (e) {
                this.displayLoginError(e.response)
            }
        },
        //--------------------------------role Models -----------------------------
        async Roles(payload) {
            try {
                let roleList = await service.Roles(payload);
                this.onRoleByIdSuccess(roleList);
                return roleList;
            } catch (e) {
                this.displayError(e.response);
            }
        },

        async RoleById(payload) {
            try {
                let roleById = await service.RoleById(payload);
                this.onRolesSuccess(roleById);
                return roleById;
            } catch (e) {
                this.displayError(e.response);
            }
        }


    })
}
