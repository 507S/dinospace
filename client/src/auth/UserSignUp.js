import bg from "./user.jpg";
import user from "./user.png";
import "../css/userType.css";
import restaurantImage from "./restaurant.png";
import dinoLogo from './dinoLogo.png';

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
const UserSignUp = () => {
    useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);
    return (
        <div className="userSignUp">
            <div className="bgImg">
            <img  className="bgIMG" src={bg}/>
            </div>
            <a href="/" className='navlogo'>
                    <img className="dinologo" src={dinoLogo} />
            </a>
            
            <div className="links2">
                <a href="/SignUp">Sign Up</a>
                <a href="/LogIn">Sign In</a>
                <a href="/Profile">Profile</a>
            </div> 
            <div className="iconElements">
                <a href="/SignUpAsRestaurant">
                    {/* <div data-aos="fade-up" className="fade"> */}
                        <button className="iconR">Restaurant</button>
                    {/* </div> */}
                </a>
                <a href="/SignUp">
                    {/* <div data-aos="fade-up" className="fade"> */}
                        <button className="iconU">Diner</button>
                    {/* </div> */}
                    {/* <img className="iconU" src={user}/> */}
                </a>
            </div>
        </div>
    );
}

export default UserSignUp;