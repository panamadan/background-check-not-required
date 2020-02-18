import React from "react";
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import Container from "muicss/lib/react/container"
import Row from "muicss/lib/react/row"
import Col from "muicss/lib/react/col"
import Button from "muicss/lib/react/button"


function Home ()
{
    return(
        <div>
            <Navbar />
            <Container>
                <Row>
                    <Col md="6" align="middle">
                        <div className="applyBtn">
                            <Button color="primary">Apply Here!</Button>
                        </div>
                    </Col>
                    <Col md="6" align="middle">
                        <div className="createBtn">
                            <Button color="primary"><a href="/create">Create Job!</a></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        
    )
}

export default Home;