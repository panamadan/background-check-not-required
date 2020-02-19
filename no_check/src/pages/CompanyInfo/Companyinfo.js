import React from 'react';
// import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Checkbox from 'muicss/lib/react/checkbox';
import Container from 'muicss/lib/react/container';
import Navbar from '../../components/Navbar/Navbar';
// import axios from "axios";

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
          <Form >
            
            <legend>Company Info</legend>
            <Input placeholder="Name " />
            <Input placeholder="Job " />
            <Textarea placeholder="Description" />
            <Button 
            // onSubmit= {handleSubmit}
            
            variant="raised">Submit</Button>
            <Checkbox name="inputA1" label="Felon" />
            <Checkbox name="inputA2" label="Misdemeanor" />
          </Form>
        </Container>
      </div>
    );
  }
}

export default CompanyInfo;