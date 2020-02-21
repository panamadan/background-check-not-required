import axios from "axios";

export default {
    createJob: function(data)
    {
        return axios.post("/create", data)
    }
}