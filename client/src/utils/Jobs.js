import axios from "axios";

export default {
    createJob: function(data)
    {
        console.log("Data in API Call: " + data )
        return axios.post("/api/create", data)
    }
}