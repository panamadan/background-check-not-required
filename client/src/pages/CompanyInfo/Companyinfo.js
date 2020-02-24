import React, { useState, useEffect } from "react";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import Checkbox from "muicss/lib/react/checkbox";
import Container from "muicss/lib/react/container";
import Navbar from "../../components/NavBar/Navbar";
import Row from "muicss/lib/react/row";
import { json } from "body-parser";
import API from "../../utils/Jobs"

function CompanyInfo() 
{
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [summary, setSummary] = useState("");
  const [crimeType, setCrimeType] = useState([]);


  
  const handleSubmit = (e) =>
  {
    e.preventDefault();

    const data = {jobTitle: jobTitle, company: company, salary: salary, summary: summary, crimeType: crimeType}
    console.log("Data in handleSubmit: " + data);
    API.createJob(data)
    .then(res => console.log(res))
    .catch(error => console.error("Error: ", error))
    .then(res => console.log("Success", res));
  }


  return (
    <div>
      <Container>
        <Row>
          <Form onSubmit={handleSubmit}>
            <legend>Company Info</legend>
            <Input
              placeholder="Job Title"
              type="text"
              value={jobTitle}
              onChange={e => setJobTitle(e.target.value)}
            />
            <Input
              placeholder="Company"
              type="text"
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
            <Input
              placeholder="Salary"
              type="text"
              value={salary}
              onChange={e => setSalary(e.target.value)}
            />
            <Input
              placeholder="Summary"
              type="text"
              value={summary}
              onChange={e => setSummary(e.target.value)}
            />
            <h3>Criminal Background Accepting</h3>
            <div onChange={e => setCrimeType(e.target.value)}>
            <Checkbox 
              name="inputA1"
              label="Felon"
              value="Felon"
            />
            <Checkbox
              name="inputA2"
              label="Misdemeanor"
              value="Misdemeanor"
            />
            </div>
            <Button variant="raised" type="submit" value="Submit">Submit</Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default CompanyInfo;
