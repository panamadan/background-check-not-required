import React from "react";
import "../Search/Search.css";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import Form from "muicss/lib/react/form";
import axios from "axios";

function Search() {
  function SearchAll() {
    var key =
      "http://www.linkup.com/developers/v-1/search-handler.js?api_key=C905A06502878FA1028015C0D34A0E7E&embedded_search_key=xxxxx&orig_ip=127.0.0.1&keyword=sales&location=55344&distance=50";

    axios.get(key).then(res => {
      console.log(res);
    });
  }
  return (
    <div>
      <Form>
        <Input className="searchVal" placeholder="Search for Jobs" />
        <Button className="searchBtn" variant="raised" onClick={(e) => {
            e.preventDefault()
              SearchAll();

            }}> 
          {/* <a
            
            href="/jobs"
          >
            Search

          </a> */}
          Search
        </Button>
        {/* <Button color="primary" onClick={() => { console.log('onClick'); }}>
    Primary
</Button> */}
      </Form>
    </div>
  );
}

export default Search;
