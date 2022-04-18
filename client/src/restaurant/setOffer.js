import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import '../css/table.css';
const SetOffer = () => {
    const [offeringName, setOfferName] = useState("");
    const [offeringCount, setOfferCount] = useState();
    const [initialState2, setInitialState2] = useState([]);
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwt.decode(token);
            console.log(decoded);
            getOffer();
        }

    }, []);
    const getOffer = async () => {
        const token = localStorage.getItem('token');
        const decoded = jwt.decode(token);
        const resID = decoded.id;
        fetch(`/offer/${resID}`)
            .then(res => {
                return res.json();
            }).then(jsonResponse => setInitialState2(jsonResponse));
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
    return ( 
    <div>
    <h1>Set Offer</h1>
    <form>
                <label>Offering name 
                    <input type="text" name="offeringName" onChange={e => { setOfferName(e.target.value) }} />
                </label>
                <label>Sit count
                    <input type="number" name="offeringCount" onChange={e => { setOfferCount(e.target.value) }} />
                </label>
                <input type="submit" value="Add offerings" onClick={handleSubmit3} />
            </form>
    
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
</div>
    
     );
    
}
 
export default SetOffer;