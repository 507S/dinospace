import '../css/index.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';
import dine from './images/dine.jpg'
import dine3 from './images/dine3.jpg'
import dine4 from './images/dine4.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';


const Restaurant = () => {
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        fetch('/post/').then(res => {
            return res.json();
        }).then(jsonResponse => setInitialState(jsonResponse));
    }, []);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log(position);
            });

        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);
    return (
        <div className="restaurant">
            <h4>Popular restaurants around your area</h4> 
            
                <div >
                    <Carousel>
                        <Carousel.Item>
                        
                            <CardGroup >
                            {initialState.map(post =>
                                <Card key={post._id}>

                                    <Card.Body>
                                        <Card.Title>{post.name}</Card.Title>
                                        <Card.Text>
                                            Rating: {post.rating}
                                            Location: {post.address.city}
                                            {console.log(post.address.city)} 
                                            <Link to={`/restaurant/${post._id}`}>View Details</Link>
                                        </Card.Text>
                                        {/* <Button onClick={()=> {this.props.history.replace('../restaurant/navbar.js')}} variant="primary">View Details</Button> */}
                                        

                                    </Card.Body>
                                </Card>
                                )}
                            </CardGroup>
                        
                        </Carousel.Item>
                    </Carousel>
                </div>
            
                    
        </div>
    );
}

export default Restaurant;