import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import dinoLogo from './images/dinoLogo.png';
// import bg from './images/user.jpg';
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../css/table.css";

const RestaurantLogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setpass] = useState("");
    const handleSubmit= async (event)=>{
       
        event.preventDefault();
        const user ={
            email,
            password
        }
        
        try {
            //CREATE BACKEND
          const response = await axios.post('/post/login', user);
          console.log(response);
          if(response.data.status=="ok" && response.data.role=="restaurant"){
            alert("login successful");
            localStorage.setItem('token', response.data.user);
           window.location.href = "/dash";
          }
          else if(response.data.status=="ok" && response.data.role!="restaurant"){
            alert("wrong password");
          }
          else{
            alert("user does not exist");
          }
        // const response= fetch('/post/',{
        //     method:'POST',
        //     mode:'no-cors',
        //     headers:{
        //         'Content-Type':'application/json',
        //         'Accept':'application/json'
        //     },
        //     body:JSON.stringify(newRestaurent)
        //   })
        //   .then(response => response.json())
        //     .then(data => console.log(data));
        } catch (error) {
            console.log(error);
        }
      
      
        //console.log(newRestaurent);
    }
    return ( 
        <div>
            <form>
                <label>Email: <input type="email" onChange={e=>setEmail(e.target.value)}/></label>
                
                <label>Pass: <input type="password" onChange={e=>setpass(e.target.value)}/></label>
                <input type="submit" value="Submit" onClick={handleSubmit} />
                
            </form>
        </div>
     );
}
 
export default RestaurantLogIn;