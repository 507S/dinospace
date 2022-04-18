import { Form, Button, Container, Row, Col } from "react-bootstrap";
import img from "./login2.jpg";
import "../css/auth.css";
import userIcon from "./user.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useState } from "react";

const LogIn = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    
    const[user, setUser] = useState({
        name:"",email:"",phone:"",pass:""
    });

    let name, value;

    const handleInputs = (e) =>{
        console.log(e);
        name= e.target.name;
        value= e.target.value;

        setUser({...user, [name]:value});
    }

    return (
        <Container>
            <Row>
                <Col md={6} sm={12}>
                    <div data-aos="fade-right" className="fade">
                        <div className="left">
                            <img className="bg" src={img} />
                        </div>
                    </div>
                </Col>
                <Col md={6} sm={12}>
                    <div className="justify-content-md-center">
                        <Form>
                            <div data-aos="fade-up" className="fade">
                                <div className="text-center">
                                    <img className="user" src={userIcon} />
                                </div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" name="email" id="email" value={user.email} onChange={handleInputs}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" name="pass" id="pass" value={user.pass} onChange={handleInputs}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>
                                <div className="mb-3">
                                    <a href="#">Forgot password?</a>
                                </div>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                                <br/>
                                <p className="emnei">Or sign in using</p>
                                {/* <i class="bi bi-facebook"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                            </div>
                        </Form>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default LogIn;