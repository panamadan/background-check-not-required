import React, {useState} from "react";
import Container from "muicss/lib/react/container"
import Form from "muicss/lib/react/form"
import Button from "muicss/lib/react/button"
import Input from "muicss/lib/react/input"

function LoginForm({ onLogin }) {
  // refs
  // form: null;
  // usernameElem: null;
  // passwordElem: null;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit clicked", data);
    const data = { username: username, password: password };
    return onLogin(data);
  };

  return (
	  <Container>
    <Form onSubmit={handleSubmit}>
      <div className="form-group">
        <Input
          className="form-control"
          type="text"
		  value={username}
		  onChange={e => setUsername(e.target.value)}
          placeholder="Enter Username"
        />
        <br />
        <Input
          className="form-control"
			value={password}
			onChange={e => setPassword(e.target.value)}
		  type="password"
          placeholder="Password"
        />
        <br />
        <Button className="btn btn-success" type="submit">
          Submit
        </Button>
      </div>
    </Form>
	</Container>
  );
}

export default LoginForm;
