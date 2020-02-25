import React, { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../../components/NavBar/Navbar";
import Search from "../../components/Search/Search";
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Button from "muicss/lib/react/button";
import PostsList from "../../components/PostsList";
import API from "../../utils/API.js";

function Home() {
  // set list data state, add set list data function
  const [listData, setListData] = useState([]);
  //function to call for data
  const getApiData = keyword => {
    // call api
    API.search(keyword)
      .then(results => {
          console.log(results);
       return (results)
    //    setListData(results);
      })
      .then(apiResults => {
        return API.getAlljobs(keyword)
        .then(dbResults => {
            if (dbResults){
                return [...apiResults,...dbResults]
            }
            else {return apiResults}
        })

      })
      .then (finalResults => {
        setListData(finalResults);
      })
      .catch(err => console.log(err));
  };

  // onload makes the api call

  //   useEffect(() => {
  // getApiData();

  //   }, []);

  return (
    <div>
      {/* <Navbar /> */}
      <Container>
        <Row>
          <Col md="8">
            <Search runSearch={getApiData} />
          </Col>
          <Col md="4">
            <Button className="createBtn" color="primary" variant="raised">
              <a href="/create">Create Job!</a>
            </Button>
          </Col>
        </Row>

        <Row>
          <Col size="md-6 sm-12">
            <PostsList list={listData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
