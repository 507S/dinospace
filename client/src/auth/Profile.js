import { Card, Button, Container, Row, Col } from "react-bootstrap";
import img from "./images/login5.jpg";
import dinoLogo from "./images/dinoLogo.png";
import img2 from "./images/bg2.jpg";
import "../css/profile.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect,useState } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";





const Profile = () => {
<<<<<<< HEAD
  
=======
  const [initialState, setInitialState] = useState();
>>>>>>> ce5e30f1188897e2883fae71d890f1d9d5127250
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const usertoken = localStorage.getItem("usertoken");
  console.log(usertoken);
    const decodeduser = jwt.decode(usertoken);
  console.log(decodeduser);

    const userID = decodeduser.id;
    const useremail = decodeduser.email;
    const username = decodeduser.name;
    console.log(userID);
    useEffect(() => {
      fetch(`/offer/user/${userID}`).then(res => {
        return res.json();
    }).then(jsonResponse => setInitialState(jsonResponse));
}, []);
      console.log(initialState);
  return (
    <div className="background">
      {/* <Navbar2 /> */}
      <img className="bg" src={img2} />
      <a href="/" className="navlogo">
        <div data-aos="fade-right" className="fade">
          <img className="dinologo" src={dinoLogo} />
        </div>
      </a>

      <div className="links2">
        <a href="/UserSignUp">Sign Up</a>
        <a href="/UserSignIn">Sign In</a>
        <a href="/Profile">Profile</a>
      </div>

      <div className="profile">
        <div data-aos="zoom-in-up" className="fade">
          <Card className="profileCard">
            <div className="cardImg">
              <Card.Img class="rounded-circle" variant="top" src={img} />
            </div>

            <Card.Title className="name">{initialState.name}</Card.Title>

            <Card.Body>
              <div className="mobile">
                <Container>
                  <Row>
                    <Col className="mobile" md={5}>
                      {" "}
                      <Card.Text>Email</Card.Text>
                    </Col>
                    <Col className="mobile" md={5}>
                      {" "}
                      <Card.Text>{initialState.email}</Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mobile" md={5}>
                      {" "}
                      <Card.Text>Address:</Card.Text>
                    </Col>
                    <Col className="mobile" md={5}>
                      {" "}
                      <Card.Text className="address">
                        272/3, badiuzzaman road, dhaka-cantonment, Dhaka-1206
                      </Card.Text>
                    </Col>
                  </Row>
                </Container>
              </div>
              <br />
              <Button className="info" variant="info">
                <a href="/userhistory">  Reservation History</a> 
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
