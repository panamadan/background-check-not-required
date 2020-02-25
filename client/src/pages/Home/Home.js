import React, { useState, useEffect } from "react";
// import "./Home.css";
// import Navbar from "../../components/NavBar/Navbar";
import Search from "../../components/Search/Search";
// import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
// import Button from "muicss/lib/react/button";
import PostsList from "../../components/PostsList";
import API from "../../utils/API.js";

// import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Home() {
  // set list data state, add set list data function
  const [listData, setListData] = useState([]);
  //function to call for data
  const getApiData = keyword => {
    // call api
    API.search(keyword)
      .then(results => {
          console.log(results);
       return (results)
    //    setListData(results);
      })
      .then(apiResults => {
        return API.getAlljobs(keyword)
        .then(dbResults => {
            if (dbResults)
            {
                return [...apiResults,...dbResults]
            }
            else {return apiResults}
        })

      })
      .then (finalResults => {
        setListData(finalResults);
      })
      .catch(err => console.log(err));
  };

  // onload makes the api call

  //   useEffect(() => {
  // getApiData();

    // }, []);

//   return (
//     <div>
//       
//       <Container>
//         <Row>
//           <Col md="8">
//             <Search runSearch={getApiData} />
//           </Col>
//           <Col md="4">
//             <Button className="createBtn" color="primary" variant="raised">
//               <a href="/create">Create Job!</a>
//             </Button>
//           </Col>
//         </Row>

//         <Row>
//           <Col size="md-6 sm-12">
//             <PostsList list={listData} />
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default Home;







const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar> */}
        {/* <Typography component="h1" variant="h5">
          Sign in
        </Typography> */}
        {/* <form className={classes.form} noValidate> */}
          {/* <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          /> */}
          {/* <TextField */}
            {/* // variant="outlined"
            // margin="normal"
            // required
            // fullWidth
            // name="password"
            // label="Job Keyword"
            // type="password"
            // id="password"
            // autoComplete="current-password"
            // runSearch={getApiData} 
          /> */}
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Search runSearch={getApiData} />
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            runsearch = {getApiData}
          >
            Search Jobs
          </Button> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="info"
            className={classes.submit}
            
          >
              <a href="/create">Create Job</a>
            
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        {/* </form> */}
      </div>

     <Row>
      <Col size="md-6 sm-12">
           <PostsList list={listData} />
         </Col>
        </Row>
    </Container>
  );
}

export default Home