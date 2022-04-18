import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import '../css/table.css';
const SetTime = () => {
    const [openTime, setOpenTime] = useState("");
    const [closeTime, setCloseTime] = useState("");
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
        console.log(decoded);
        const resID = decoded.id;
        try {
            const response = await axios.patch(`post/${resID}`, { newTime: newTime });

            console.log(response);
            if(response.status==200){
                alert("Time successfully changed");
            }
            else {
                alert("Time not changed due to connectivity prob");
            }

        } catch (error) {
            console.log(error);
        }
    }
    return ( <div>
        <h1>Set Time</h1>
        <form>
                <label>Open Time
                    <input type="time" name="openTime" onChange={e => { setOpenTime(e.target.value) }} />
                </label>
                <label>Close Time
                    <input type="time" name="closeTime" onChange={e => { setCloseTime(e.target.value) }} />
                </label>
                <input type="submit" value="Set Open Close Time" onClick={handleSubmit2} />
            </form>
    </div> );
}
 
export default SetTime;