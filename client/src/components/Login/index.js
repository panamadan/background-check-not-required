import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginForm from "../LoginForm";
import Auth from "../../utils/Auth";
import "../../pages/SignIn/Signin.css";
import Navbar from "../NavBar/Navbar";
// import ReactDOM from 'react-dom';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
// import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import { Container } from "muicss/react";
//Uses the Auth methods to actually login with the LoginForm Component.
class Login extends React.Component {
    //Initial boolean to check for authenticated user
	state = {
		redirectToReferrer: false
	}
    /* We need to POST to the API the users info,
        This will get passed down as a prop to the LoginForm */
	login = (data) => {
		console.log('Logging in ' + data.username);
		fetch('api/users/login', {
			method: 'POST',
			body: JSON.stringify(data),
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
		})
		.then((response) => {
			if (response.status === 200) { //All good
				Auth.authenticate(() => { //Update the boolean and take off the cuffs
					this.setState({ redirectToReferrer: true })
				});
			}
		})
		.catch((err) => {// No beuno, kick them
			console.log('Error logging in.', err);
		});
	}

	render() {
		const { from } = this.props.location.state || { from: { pathname: '/protected' } }
		const { redirectToReferrer } = this.state
		
		if (redirectToReferrer) {
			return (
				<Redirect to={from}/>
			)
		}
		
		return (
			<div>
            {/* <Navbar /> */}
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
}

export default Login;