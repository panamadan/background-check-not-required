import React, { useState, useEffect } from "react";

// import { ListItem, List } from "../List";
// import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
// import { useStoreContext } from "../../utils/GlobalState";
// import {  UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API.js";
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Panel from "muicss/lib/react/panel";
import { List, ListItem } from "../List";

const PostsList = () => {
  // set list data state, add set list data function
  const [listData, setListData] = useState([]);
  //function to call for data
  const getApiData = () => {
    // call api
    API.search()
      .then(results => {
        setListData(results);
      })
      .catch(err => console.log(err));
  };

  // onload makes the api call
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="8">
          {console.log("Data:" + setListData)}

          {listData.map((job, i) => {
            return (
              <Panel>
                {job.job_title ? (
                  <ListItem key={i}>
                    <p> title:{job.job_title}</p>
                    <p>location: {job.job_location}</p>
                    <p>company:{job.job_company}</p>
                    <p>tag:{job.job_tag}</p>
                    <p>description:{job.job_description}</p>
                  </ListItem>
                ) : (
                  <h3>Noresults to Display</h3>
                )}
              </Panel>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}

export default PostsList;
