import React from "react";
import Col from "muicss/lib/react/col"
import Container from "muicss/lib/react/container";
import { Button } from "muicss/react";

function Dashboard ()
{
    return(
        <div>
            <h1>Dashboard</h1>
            <Container>
                <Col md="6">

                </Col>
                <Col md="6">
                    <Button><a href="/create">Create Job</a></Button>
                </Col>
            </Container>
            
        </div>
    );
};

export default Dashboard;