import React from 'react';

import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Checkbox from 'muicss/lib/react/checkbox';
import Container from 'muicss/lib/react/container';
import Navbar from '../../components/Navbar/Navbar';
// import axios from "axios";
import Row from "muicss/lib/react/row";

class CompanyInfo extends React.Component {

  // handleSubmit(event){
  //   event.preventDefault();
  //   API.getJobs(jobsSearch)
  //   .then(res => setJobs(res.data))
  //   .catch(err => console.log(err));
  // }

  
  render() {
    return (
      <div>
        <Navbar />

        <Container>
          <Row>
          <Form>
            <legend>Company Info</legend>
            <Input id="jobTitle" placeholder="Job Title " />
            <Input id="company" placeholder="Company" />
            <Input id="salary" placeholder="Salary " />
            <Input id="summary" placeholder="Summary" />
            <h3>Criminal Background Accepting</h3>
            <Checkbox id="crimeType" name="inputA1" label="Felon" />
            <Checkbox id="crimeType" name="inputA2" label="Misdemeanor" />
            <Button variant="raised">Submit</Button>

          </Form>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CompanyInfo;