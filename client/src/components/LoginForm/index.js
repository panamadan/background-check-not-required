import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar"
import Button from "@material-ui/core/Button"
import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import TextField from "@material-ui/core/TextField"
import Grid from "@material-ui/core/Grid"
import Link from "@material-ui/core/Link"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles";

function LoginForm({ onLogin }) 
{
	// Set states for username and password
  	const [username, setUsername] = useState("");
  	const [password, setPassword] = useState("");

	// Handle form submit
	const handleSubmit = e => 
	{
    	e.preventDefault();
    	console.log("submit clicked", data);
    	const data = { username: username, password: password };
    	return onLogin(data);
  	};

	// Styling for Material UI Components
  	const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  	}));
	
	// Use styling in JSX
	const classes = useStyles();
	  
	// Render
  	return (
    	<Container component="main" maxWidth="xs">
      		<CssBaseline />
      		<div className={classes.paper}>
        		<Avatar className={classes.avatar}>
          			<LockOutlinedIcon />
        		</Avatar>
        		<Typography component="h1" variant="h5">
          			Sign in
        		</Typography>
        	<form className={classes.form} onSubmit={handleSubmit} noValidate>
          		<TextField
            		variant="outlined"
            		margin="normal"
            		required
            		fullWidth
            		id="email"
            		label="Email Address"
            		name="email"
					autoComplete="email"
					value={username}
					onChange={e => setUsername(e.target.value)}
            		autoFocus
          		/>
          		<TextField
            		variant="outlined"
            		margin="normal"
            		required
            		fullWidth
            		name="password"
            		label="Password"
            		type="password"
            		id="password"
					autoComplete="current-password"
					value={password}
					onChange={e => setPassword(e.target.value)}
          		/>
          		<Button
            		type="submit"
            		fullWidth
            		variant="contained"
            		color="primary"
            		className={classes.submit}
          		>
            		Sign In
          		</Button>
          		<Grid container>
            		<Grid item>
              			<Link href="register" variant="body2">
                			{"Don't have an account? Sign Up"}
              			</Link>
            		</Grid>
          		</Grid>
        	</form>
      		</div>
    	</Container>
  );
}

export default LoginForm;
