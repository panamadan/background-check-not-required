import React from "react";
import "./Home.css";
import Navbar from "../../components/NavBar/Navbar";
import Search from "../../components/Search/Search";
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Button from "muicss/lib/react/button";


function Home ()
{
    return(
        <div>
            {/* <Navbar /> */}
            <Container>
                <Row>
                    <Col md="8">
                        <Search/>
                    </Col>
                    <Col md="4">
                        <Button className="createBtn" color="primary" variant="raised"><a href="/create">Create Job!</a></Button>
                    </Col>
                </Row>
                <Row>
                    
                </Row>
            </Container>
        </div>
        
    )
}

export default Home;