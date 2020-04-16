import axios from "axios";

export default {
    // search from searchbar
    getSearch: function (searchterm) {
        return axios.get("/api/trefle/all/" + searchterm);
    },
    getPlant: function (plantId) {
        return axios.get("api/trefle/" + plantId);
    },
    getUser: function (user) {
        return axios.get("api/user/" + user);
    },
    addCollection: function (user, plantName, plantId) {
        return axios.put(`api/user/${user}`, {
            name: plantName,
            id: plantId,
        });
    },
};
