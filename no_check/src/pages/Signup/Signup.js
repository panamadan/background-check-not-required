import React from "react";
import "./Signup.css";
import Navbar from "../../components/Navbar/Navbar";
// import ReactDOM from 'react-dom';
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
// import Textarea from "muicss/lib/react/textarea";
import Button from "muicss/lib/react/button";
import { Container } from "muicss/react";
function Signup() {
  return (
    <div>
      <Navbar />
      <Container>
        <Form>
          <legend>Sign Up</legend>
          <Input label="Name" floatingLabel={true} required={true} />
          <Input
            label="Email Address"
            type="email"
            floatingLabel={true}
            required={true}
          />
          <Input
            label="Password"
            type="password"
            floatingLabel={true}
            required={true}
          />


          <Button variant="raised">Sign up</Button>
        </Form>
      </Container>
    </div>
  );
}

export default Signup;
