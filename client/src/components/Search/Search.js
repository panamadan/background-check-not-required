import React, { useState } from "react";
import "../Search/Search.css";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import Form from "muicss/lib/react/form";

function Search(props) {
  const [term, setTerm] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.runSearch(term);
  };

  const handleChange = e => {
    setTerm(e.target.value);
   
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          className="searchVal"
          placeholder="Search for Jobs"
          onChange={handleChange}
        />
        <Button className="searchBtn" variant="raised">
          Search
        </Button>
      </Form>
    </div>
  );
}

export default Search;
