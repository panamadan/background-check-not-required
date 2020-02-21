import axios from "axios";

export default {
    createJob: function()
    {
        return axios.get("/create")
    }
}