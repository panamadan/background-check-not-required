import React, { useState} from "react";
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
// import Textarea from "muicss/lib/react/textarea";
import Button from "muicss/lib/react/button";
import { Container } from "muicss/react";

function RegisterForm({onRegister}) {
  // refs
//   form: null;
//   usernameElem: null;
//   passwordElem: null;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => 
  {
	e.preventDefault();
	console.log("submit clicked", data)
	const data = {username: username, password: password}
	return(onRegister(data))
  };

  console.log(`Register form states are: ${JSON.stringify(username, password)}`);

  return (
    // <form
    // 	ref={(elem) => this.form = elem}
    // 	onSubmit={(e) => {
    // 		e.preventDefault();
    // 		return onRegister({
    // 			username: this.usernameElem.value,
    // 			password: this.passwordElem.value
    // 		});
    // 	}}
    // >
    // 	// {/* <div className="form-group">
    // 		<input className="form-control" ref={(input) => this.usernameElem = input} type='text' name="username" placeholder='Enter Username' /><br/>
    // 		<input className="form-control"  ref={(input) => this.passwordElem = input} type='password' name="password" placeholder='Password' /><br/>
    // 		<button className="btn btn btn-primary" type='submit'>Submit</button>
    // 	</div> */}

	// {/* </form> */}
	<div>
    <Container>
      <Form onSubmit={handleSubmit}>
        <legend>Sign Up</legend>
        <Input
          label="Email Address"
          type="email"
		  value={username}
		  onChange={e => setUsername(e.target.value)}
          floatingLabel={true}
          required={true}
        />
        <Input
          label="Password"
          type="password"
		  value={password}
		  onChange={e => setPassword(e.target.value)}
          floatingLabel={true}
          required={true}
        />

        <Button variant="raised" typeof="submit">
          Sign up
        </Button>
      </Form>
    </Container>
	</div>
  );
}

export default RegisterForm;