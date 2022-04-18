import React from 'react';
import axios from 'axios';
import { Table } from "react-bootstrap";
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import '../css/table.css';
const RestaurantDash = () => {
    const [initialState, setInitialState] = useState([]);
    const [initialState2, setInitialState2] = useState([]);
    const [openTime, setOpenTime] = useState("");
    const [closeTime, setCloseTime] = useState("");
    const [offeringName, setOfferName] = useState("");
    const [offeringCount, setOfferCount] = useState();


    //const [reserveStatus, setInitialStatus] = useState("");

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwt.decode(token);
            console.log(decoded);
            getTable();
            getOffer();
        }

    }, []);
    const getTable = async () => {
        const token = localStorage.getItem('token');
        const decoded = jwt.decode(token);
        const resID = decoded.id;
        fetch(`/reserve/${resID}`, {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        }).then(res => {
            return res.json();
        }).then(jsonResponse => setInitialState(jsonResponse));
    }
    const getOffer = async () => {
        const token = localStorage.getItem('token');
        const decoded = jwt.decode(token);
        const resID = decoded.id;
        fetch(`/offer/${resID}`)
            .then(res => {
                return res.json();
            }).then(jsonResponse => setInitialState2(jsonResponse));
    }

    const handleSubmit = async (reserveID, reserveStatus) => {
        console.log(reserveStatus);
        try {
            const response = await axios.patch(`reserve/${reserveID}`, { reserveStatus: reserveStatus });
            console.log(response);
            window.location.reload(true);
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit2 = async (event) => {
        //console.log(reserveStatus);
        event.preventDefault();

        const newTime = {
            openTime: openTime,
            closeTime: closeTime
        };
        console.log(newTime);
        const token = localStorage.getItem('token');
        const decoded = jwt.decode(token);
        const resID = decoded.id;
        try {
            const response = await axios.patch(`post/${resID}`, { newTime: newTime });

            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit3 = async (event) => {
        //console.log(reserveStatus);
        event.preventDefault();
        const token = localStorage.getItem('token');
        const decoded = jwt.decode(token);
        const resName = decoded.name;
        const resID = decoded.id;
        const newOffering = {
            restaurantID: resID,
            restaurantName: resName,
            offeringName:offeringName ,
            offeringCount: offeringCount,
            remainingSits: offeringCount
        };
        console.log(newOffering);
       
        try {
            const response = await axios.post('reserve/sits', newOffering);

            console.log(response);
            if(response.status=200){
                alert('Offering Added Successfully');
            }

        } catch (error) {
            console.log(error);
        }
    }
    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/restaurantLogin";
    }
    const handleSubmit4 = async (optionID, prevSitCount) => {
        console.log(prevSitCount);
        try {
            const response = await axios.patch(`offer/sitreset/${optionID}`, { prevSitCount: prevSitCount });
            console.log(response);
            window.location.reload(true);
        } catch (error) {
            console.log(error);
        }
    }
    return (<div >
        <div className="links2">
            <a href="/Signup">sign Up</a>
            <button onClick={handleLogout}> logout </button>
        </div>
        <div className="table">
            <h1 className="text-center">Reservation History</h1>
            <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Reservation name</th>
                    <th>Reservation date</th>
                    <th>Person Count</th>
                    <th>Offering Enrolled</th>
                    <th>Status Button</th>
                    <th>Current Status</th>
                </tr>
                </thead>
                <tbody>
                {initialState.map(post =>
                    <tr key={post._id}><td> {post.reservationName} </td>
                        <td> {
                                 post.date.split("T")[0]
                            } 
                        </td>
                        <td> {post.person} </td>
                        <td> {post.optionname} </td>
                        <td>
                            <button onClick={() => {
                                // setInitialStatus("DONE");
                                handleSubmit(post._id, "DONE");
                            }}>Accept</button>
                            <button value="REJECT" onClick={(e) => {
                                //setInitialStatus(e.target.value);
                                handleSubmit(post._id, "REJECT");
                            }}>Reject</button>
                        </td>
                        <td> {post.reserve_status} </td>
                    </tr>
                    
                )
                }
                </tbody>

            </Table>

        </div>
        <div>
            <h3>Set Opening and closing Time</h3>
            <form>
                <label>Open Time
                    <input type="time" name="openTime" onChange={e => { setOpenTime(e.target.value) }} />
                </label>
                <label>Close Time
                    <input type="time" name="closeTime" onChange={e => { setCloseTime(e.target.value) }} />
                </label>
                <input type="submit" value="Set Open Close Time" onClick={handleSubmit2} />
            </form>
        </div>
        <div>
            <h3>Your offerings </h3>
            <form>
                <label>Offering name 
                    <input type="text" name="offeringName" onChange={e => { setOfferName(e.target.value) }} />
                </label>
                <label>Sit count
                    <input type="number" name="offeringCount" onChange={e => { setOfferCount(e.target.value) }} />
                </label>
                <input type="submit" value="Add offerings" onClick={handleSubmit3} />
            </form>
        </div>
        <div>
            <h3>Your Offering List</h3>
            <table>
                <tr>
                    <th>Offering Name</th>
                    <th>Sit Count</th>
                    <th>Remaining sits</th>
                    <th> RESET????</th>
                </tr>
                {initialState2.map(post =>
                    <tr key={post._id}><td> {post.offeringName} </td>
                        <td> {post.offeringCount} </td>
                        <td> {post.remainingSits} </td>
                        <td> <button onClick={() => {
                                //setInitialStatus(e.target.value);
                                handleSubmit4(post._id, post.offeringCount);
                            }}> RESET </button>
                        </td>
                    </tr>
                )}
            </table>
        </div>


    </div>);
}

export default RestaurantDash;