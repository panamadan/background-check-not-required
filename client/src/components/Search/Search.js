import React, { useState } from "react";
import "../Search/Search.css";
// import Input from "muicss/lib/react/input";
// import Button from "muicss/lib/react/button";
// import Form from "muicss/lib/react/form";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function Search(props) {
  const [term, setTerm] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    props.runSearch(term);
  };

  const handleChange = e => {
    setTerm(e.target.value);
  };

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
    <div>
        
      <form onSubmit={handleSubmit}
      className={classes.form}
      
      >
        {/* <Input
          className="searchVal"
          placeholder="Search for Jobs"
          onChange={handleChange}
        />
        <Button className="searchBtn" variant="raised">
          Search
        </Button> */}
        <TextField
        
            variant="outlined"
            margin="normal"
            // required
            fullWidth
            // name="password"
            label="Job Keyword"
            // type="password"
            // id="password"
            // autoComplete="current-password"
            // runSearch={getApiData} 
            onChange={handleChange}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          {/* <Search runSearch={getApiData} /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            // runsearch = {getApiData}
          >
            Search Jobs
          </Button>
      </form>
    </div>
  );
}

export default Search;
