import axios from "axios";

const url = "https://cors-anywhere.herokuapp.com/http://www.linkup.com/developers/v-1/search-handler.js?";
const apikey = "api_key=C905A06502878FA1028015C0D34A0E7E&";
const embedded_search_key =
  "embedded_search_key=aca8a0a79667e220697937418b88b387&";
const location = "location=Orlando&";

export default {
  search: function(keyword, distance = 50) {
    keyword = "keywords=" + keyword;
    distance = "distance=" + distance + "&";
    
    const searchUrl = url + apikey + embedded_search_key + location + distance + keyword;

    return axios.get(searchUrl, { headers: { 'X-Requested-With': 'local' }})
    .then(results => results.data.jobs);
  }
};
