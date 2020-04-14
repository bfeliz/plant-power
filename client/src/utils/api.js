import axios from "axios";

export default {
    // search from searchbar
    getSearch: function (searchterm) {
        return axios.get("/api/trefle/all/" + searchterm);
    },
};
