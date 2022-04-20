import { Card, Button, Container, Row, Col } from "react-bootstrap";
import img from "./images/login5.jpg";
import dinoLogo from './images/dinoLogo.png';
import img2 from "./images/bg2.jpg";
import "../css/profile.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Profile = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    const token = localStorage.getItem("token2");
    console.log(token);
    return (
        <div className="background">
            {/* <Navbar2 /> */}
            <img className="bg" src={img2} />
            <a href="/" className='navlogo'>
                <div data-aos="fade-right" className="fade">
                    <img className="dinologo" src={dinoLogo} />
                </div>
            </a>
            
            <div className="links2">
                <a href="/SignUp">Sign Up</a>
                <a href="/LogIn">Sign In</a>
                <a href="/Profile">Profile</a>
            </div>



            <div className="profile">
                <div data-aos="zoom-in-up" className="fade">

                    <Card className="profileCard">
                        <div className="cardImg">
                            <Card.Img class="rounded-circle" variant="top" src={img} />

                        </div>

                        <Card.Title className="name">{
                            localStorage.getItem('token2')
                        }</Card.Title>

                        <Card.Body>

                            <div className="mobile">
                                <Container>
                                    <Row>
                                        <Col className="mobile" md={5}> <Card.Text>Mobile:</Card.Text></Col>
                                        <Col className="mobile" md={5}> <Card.Text>01849665655</Card.Text></Col>
                                    </Row>
                                    <Row>
                                        <Col className="mobile" md={5}> <Card.Text>Address:</Card.Text></Col>
                                        <Col className="mobile" md={5}> <Card.Text className="address">272/3, badiuzzaman road, dhaka-cantonment, Dhaka-1206</Card.Text></Col>
                                    </Row>
                                </Container>
                            </div>
                            <br />
                            <Button className="info" variant="info">Reservation History</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>
    );
}

export default Profile;