import axios from "axios";

export default {
    createJob: function(data)
    {
        return axios.post("/api/create", data)
    },
    getJob: function(data)
    {
        return axios.get("/api/dashboard", data)
    }
}