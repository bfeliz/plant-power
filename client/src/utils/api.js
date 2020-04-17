import axios from "axios";

export default {
    // search from searchbar
    getSearch: function (searchterm) {
        return axios.get("/api/trefle/all/" + searchterm);
    },
    // get specific plant
    getPlant: function (plantId) {
        return axios.get("api/trefle/" + plantId);
    },
    // checks for user and adds to database if they don't exist
    getUser: function (user) {
        return axios.get("api/user/" + user);
    },
    // adds saved plant to user collection
    addCollection: function (user, plantName, plantId) {
        return axios.put(`api/user/${user}`, {
            name: plantName,
            id: plantId,
        });
    },
    // displays user's current collection
    viewCollection: function (user) {
        return axios.get("api/user/collection/" + user);
    },
};
