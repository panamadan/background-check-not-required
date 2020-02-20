import React from "react";
import "../Signin/Signin.css";
import Navbar from "../../components/Navbar/Navbar";
// import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
// import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import { Container } from "muicss/react";

function Signin ()
{
    return(
        <div>
            <Navbar />
            <Container>
            <Form>
        <legend>Sign In</legend>
        {/* <Input label="Name " required={true} /> */}
        <Input label="Email Address" type="email" floatingLabel={true} required={true} />
        <Input label="Password" type="password" floatingLabel={true} required={true} />
        {/* <Textarea label="Required Textarea" floatingLabel={true} required={true} /> */}
        {/* <Input label="Email Address" type="email" defaultValue="Validation error" /> */}
        <Button variant="raised">Sign in</Button>
      </Form>
      </Container>
        </div>
    )
}

export default Signin;