import {React, useState } from "react";

function createJob ()
{
    const [jobTitle, setJobTitle] = useState();
    const [company, setCompany] = useState();
    const [salary, setSalary] = useState();
    const [summary, setSummary] = useState();
    const [crimeType, setCrimeType] = useState();

    onsubmit(e)
    {
        this.setJobTitle(
        {
           jobTitle: 
        });

        this.setCompany(
        {
            company: e.target.value
        })
    }

}