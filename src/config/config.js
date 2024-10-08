const env = {

    development: {
        api: "http://localhost:8000/api",
    },
};

const all = {
    routes: {
        SignUp: "users/signup",
        login: "users/login",
        roles:"roles/",
        role:"roles/role",
        events:"events/list",
        category:"events/category",
        service:"events/service",
        provider:"events/common",
        multiImage:"events/imgM",
        eventCreation:"events/addEvent"
    }
}
console.log("process.env.NODE_ENV", process.env.REACT_APP_ENV)
const config = {
    ...all,
    ...env[process.env.REACT_APP_ENV || "development"],
}


export default config;

