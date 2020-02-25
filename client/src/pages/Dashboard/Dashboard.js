import React from "react";
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"

function Dashboard ()
{
    return(
        <div>
            <h1>Dashboard</h1>
            <Container>
                <Button><a href="/create">Create Job</a></Button>
            </Container>
            
        </div>
    );
};

export default Dashboard;