import {React, useState } from "react";

function createJob ()
{
    const [jobTitle, setJobTitle] = useState();
    const [company, setCompany] = useState();
    const [salary, setSalary] = useState();
    const [summary, setSummary] = useState();
    const [crimeType, setCrimeType] = useState();

    const handleSubmit = e => 
    {
        console.log("Job Title: " + this.refs.jobTitle)
        console.log("Company: " + this.refs.company)
        console.log("Salary: " + this.refs.salary)
        console.log("Summary: " + this.refs.summary)
        console.log("Crime Type: " + this.refs.jobTitle)
    }

}