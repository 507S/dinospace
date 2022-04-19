import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
import dinoLogo from "../auth/images/dinoLogo.png";
import bg from "../auth/images/bg4.jpg";
import "../css/table.css";
import "../css/profile.css";
import jwt from "jsonwebtoken";
import "../css/table.css";

const RestaurantProfile = () => {
    return ( 
        <div className="background">
      {/* <Navbar2 /> */}
      <img className="bg2" src={bg} />
      <a href="/" className="navlogo">
        {/* <div data-aos="fade-right" className="fade"> */}
          <img className="dinologo" src={dinoLogo} />
        {/* </div> */}
      </a>

      <div className="links2">
        <a href="/SignUp">Sign Up</a>
        <a href="/LogIn">Sign In</a>
        <a href="/Profile">Profile</a>
      </div>

      <div className="profile3">
        {/* <div data-aos="zoom-in-up" className="fade"> */}
          <div className="justify-content-md-center"></div>
          </div>
          
          </div>
     );
}
 
export default RestaurantProfile;