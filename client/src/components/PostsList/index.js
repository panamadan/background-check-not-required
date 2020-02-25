import React, { useState, useEffect } from "react";

// import { ListItem, List } from "../List";
// import DeleteBtn from "../DeleteBtn";
import { Link } from "react-router-dom";
// import { useStoreContext } from "../../utils/GlobalState";
// import {  UPDATE_POSTS, LOADING } from "../../utils/actions";

import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Panel from "muicss/lib/react/panel";
import { List, ListItem } from "../List";
import Card from "../Card";

const PostsList = (props) => {
  return (
    <Container>
      <Row>
        <Col md="8">
          {/* {console.log("Data:" + setListData)} */}

          {props.list.map((job, i) => {
            return (
              <div>
                {/* <Card> */}

                <Panel>
                  {job.job_title ? (

                    <Card job={job} key={i}>
                      {/* <p> {job.job_title}</p> */}
                      {/* <p> {job.job_location}</p> */}
                      <p> {job.job_company}</p>
                      <p> {job.job_tag}</p>
                      <p> {job.job_description}</p>
                    </Card>
                  ) : (
                    <h3>Noresults to Display</h3>
                  )}
                </Panel>
                {/* </Card> */}
              </div>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};

export default PostsList;
