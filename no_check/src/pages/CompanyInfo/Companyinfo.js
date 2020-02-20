import React from "react";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import Checkbox from "muicss/lib/react/checkbox";
import Container from "muicss/lib/react/container";
import Navbar from "../../components/Navbar/Navbar";
import Row from "muicss/lib/react/row";

function CompanyInfo() 
{
  function handleSubmit(event)
  {
    const 

  }

  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Form>
            <legend>Company Info</legend>
            <Input
              id="jobTitle"
              placeholder="Job Title"
              type="text"
              onChange={e => setJobTitle(e.target.value)}
            />
            <Input
              id="company"
              placeholder="Company"
              type="text"
              onChange={e => setCompany(e.target.value)}
            />
            <Input
              id="salary"
              placeholder="Salary"
              type="text"
              onChange={e => setSalary(e.target.value)}
            />
            <Input
              id="summary"
              placeholder="Summary"
              type="text"
              onChange={e => setSummary(e.target.value)}
            />
            <h3>Criminal Background Accepting</h3>
            <Checkbox id="crimeType" name="inputA1" label="Felon" ref="felon" />
            <Checkbox
              id="crimeType"
              name="inputA2"
              label="Misdemeanor"
              ref="misdemeanor"
            />
            <Button variant="raised">Submit</Button>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default CompanyInfo;
