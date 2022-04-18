import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

///import {Grid, paper} from '@material-ui/core';
const RegisterRestaurents = () => {
    const[name,setRestaurantName]=useState("");
    const[mail,setRestaurantMail]=useState("");
    const[city,setRestaurantCity]=useState("");
    const[street,setRestaurantStreet]=useState("");
    const[house,setRestaurantHouse]=useState("");
    const[location,setRestaurantLocation]=useState("");
    const[UserID,setRestaurantUserID]=useState("");
    const[password,setpassword]=useState("");
    const[cpassword,setcpassword]=useState("");
    const[cuisine,setCuisine]=useState([""]);
    const[openingTime,setOpenTime]=useState("");
    const[closingTime,setClosingTime]=useState("");
    const[menu,setMenu]=useState([]);

    const rating = 1;

    const handleSubmit= async (event)=>{
        event.preventDefault();
        console.log("lol"+name);
        const address={
            city:city,
            street:street,
            houseNumber:house
        }
        if(password == cpassword){
        const newRestaurent ={
          name,
          address,
          cuisine,
          rating,
          location, 
          UserID,
          mail,
          password,
          openingTime,
          closingTime
        }
        console.log(newRestaurent);
        try {
          const response = await axios.post('/post/', newRestaurent);
          console.log(response);
          if(response.data.message=="email already exists"){
            alert("email already exists");
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
      }
      else{
        alert("password not match");
      }
        //console.log(newRestaurent);
    }
    
    return(
        
        <div className="restaurant">
            hello
            <form>
        <label>
          Name:
          <input type="text" onChange={e=>setRestaurantName(e.target.value)}/>
        </label>
        <label>
          Location:
          <input type="text" onChange={e=>setRestaurantLocation(e.target.value)}/>
        </label>
        <label >
          mail:
          <input id="email" type="email" onChange={e=>{setRestaurantMail(e.target.value);
          }}/>
        </label>
        <label>
          Cuisine:
          <input type="text" onChange={e=>setCuisine(e.target.value)}/>
        </label>
        <label>
          City:
          <input type="text" onChange={e=>setRestaurantCity(e.target.value)}/>
        </label>
        <label>
          Street:
          <input type="text" onChange={e=>setRestaurantStreet(e.target.value)}/>
        </label>
        <label>
          HouseNumber:
          <input type="text" onChange={e=>setRestaurantHouse(e.target.value)}/>
        </label>
        <label>
          Opening Time:
          <input type="time" onChange={e=>setOpenTime(e.target.value)}/>
        </label>
        <label>
          HouseNumber:
          <input type="time" onChange={e=>setClosingTime(e.target.value)}/>
        </label>
        <label>
          Password:
          <input type="password" id="pass1" onChange={e=>setpassword(e.target.value)}/>
        </label>
        <label>
          Confirm Password:
          <input type="password" id="pass2" onChange={e=>setcpassword(e.target.value)}/> 
        </label>
        <input type="submit" value="Submit" onClick={handleSubmit}/>
      </form>
        </div>
        
    );
}
export default RegisterRestaurents;