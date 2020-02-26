import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import API from "../../utils/Jobs"

function CompanyInfo() 
{
  // Set states to get Job Posting data from the form
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [summary, setSummary] = useState("");
  const [crimeType, setCrimeType] = useState([]);

  // Handle form submission
  const handleSubmit = (e) =>
  {
    e.preventDefault();

    const data = {jobTitle: jobTitle, company: company, salary: salary, summary: summary, crimeType: crimeType}
    console.log("Data in handleSubmit: " + JSON.stringify(data));
    API.createJob(data)
    .then(res => console.log(res))
    .catch(error => console.error("Error: ", error))
    .then(res => console.log("Success", res));
  }

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
    },
    center:
    {
      marginLeft: theme.spacing(5),
      alignItems: "center"
    }
  }));

  // Use styling in JSX
  const classes = useStyles();

  // Render
  return (
    <div>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Create Job Post
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Company"
                name="compay"
                value={company}
		            onChange={e => setCompany(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Job Title"
                name="jobTitle"
                value={jobTitle}
		            onChange={e => setJobTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Salary"
                name="salary"
                value={salary}
		            onChange={e => setSalary(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Summary"
                name="summary"
                value={summary}
		            onChange={e => setSummary(e.target.value)}
              />
            </Grid>
            <div className={classes.center}>
            <Typography component="h1" variant="h5">
              Accepting Criminal Background
            </Typography>
            <Grid container>
            <Grid item xs>
            <FormControlLabel
            control={<Checkbox value="Misdemeanor" color="primary" />}
            label="Misdemeanor"
            onChange={e => setCrimeType(e.target.value)}
          />
            </Grid>
            <Grid item>
            <FormControlLabel
            control={<Checkbox value="Felony" color="primary" />}
            label="Felony"
            onChange={e => setCrimeType(e.target.value)}
          />
            </Grid>
          </Grid>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  );
}

export default CompanyInfo;
