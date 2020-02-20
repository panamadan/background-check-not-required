import React from "react";
import "../Search/Search.css";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import Form from "muicss/lib/react/form"

function Search()
{


    return(
        <div>
             <Form>
                <Input className="searchVal" placeholder="Search for Jobs" />
                <Button className="searchBtn" variant="raised"><a href="/jobs">Search</a></Button>
             </Form>
        </div>
    );
};

export default Search;