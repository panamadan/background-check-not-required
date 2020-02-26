import React from 'react'
import 
{
	BrowserRouter as Router,
	Route,
  	Redirect,
  	Switch,
	withRouter
} from 'react-router-dom';
import Auth from "./utils/Auth";
import Login from "./components/Login";
import Register from "./components/Register";
import Container from "./components/Grid/index";
import './App.css';
import Home from "./pages/Home/Home"
import NavBar from "./components/NavBar/Navbar"
import CompanyInfo from './pages/CompanyInfo/Companyinfo';
import Dashboard from "./pages/Dashboard/Dashboard"

//Now we have all the stuff we need .. let's render some components with the Router
const AuthExample = () => (
	<Router>
		<div>
			<NavBar/>
			<Container>
				<AuthButton/>
				<Switch>
					<Route exact path="/create" component={CompanyInfo} />
					<Route exact path="/" component={Home}/>
					<Route exact path="/login" component={Login}/>
					<Route exact path="/register" component={Register}/>
					<PrivateRoute exact path="/dashboard" component={Dashboard}/>
				</Switch>
			</Container>
		</div>
	</Router>
)


//Authbutton component / withRouter is imported from react-router
const AuthButton = withRouter(({ history }) => (
	Auth.isAuthenticated ? (
		<div className="container">
			<p></p>
			<button className="btn btn-danger" 
				onClick={() => {
					Auth.signout(() => history.push('/'))
				}}>
				Sign out
			</button>
		</div>
	) : (
		<p></p>
	)
))

// This is the private route component this checks for an authorized user here
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		Auth.isAuthenticated ? (
			<Component {...props}/>
		) : (
			<Redirect to={{
				pathname: '/login',
				state: { from: props.location }
			}}/>
		)
	)}/>
)

export default AuthExample