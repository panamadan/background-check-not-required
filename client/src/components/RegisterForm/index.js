import React from 'react'
import Form from "muicss/lib/react/form";
import Input from "muicss/lib/react/input";
// import Textarea from "muicss/lib/react/textarea";
import Button from "muicss/lib/react/button";
import { Container } from "muicss/react";



class RegisterForm extends React.Component {
	// refs
	form: null;
	usernameElem: null;
	passwordElem: null;

	render() {
		const { onRegister } = this.props;
		console.log(`Register form props are: ${JSON.stringify(this.props)}`);
		
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
			
		)
	}
}

export default RegisterForm