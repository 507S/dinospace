import { Table } from "react-bootstrap";
import "../css/table.css"
import dinoLogo from './images/dinoLogo.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useState } from "react";
import axios from "axios";
import bg from "./images/user.jpg"

const ReservationHistory = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <div className="history">
            {/* <Navbar2 /> */}
            <img className="bg" src={bg} />
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
            <div className="table">
            <h1 className="text-center">Reservation History</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Restaurant Name</th>
                        <th>Reservation Date</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sao 21</td>
                        <td>13 Jan 2022</td>
                        <td><a href="#">View Details</a></td>
                    </tr>
                    <tr>
                        <td>Sao 21</td>
                        <td>21 Feb 2022</td>
                        <td><a href="#">View Details</a></td>

                    </tr>
                    <tr>
                        <td>Sao 21</td>
                        <td>11 Jan 2022</td>
                        <td><a href="#">View Details</a></td>

                    </tr>
                </tbody>
            </Table>
            </div>
        </div>
    );
}

export default ReservationHistory;