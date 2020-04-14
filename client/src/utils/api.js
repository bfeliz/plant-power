import axios from "axios";

export default {
    // search from searchbar
    getSearch: function (searchterm) {
        return axios.get("/api/trefle/all/" + searchterm);
    },
    getPlant: function (plantId) {
        return axios.get("api/trefle/" + plantId);
    },
};
