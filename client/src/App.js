import './css/index.css';
import Home from './FrontPage/Home';
import LogIn from './auth/LogIn';
import UserSignIn from './auth/UserSignIn';
import UserSignUp from './auth/UserSignUp';
import Profile from './auth/Profile';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignUp from './auth/SignUp';
import Restaurant from './restaurant/Restaurant';
import RegisterRestaurents from './auth/SignupRestaurant.js';
import Reserve from './reservation/Reserve';
import RestaurantDash from './restaurant/restaurantDash'; 
import LoginRestaurents from './auth/restaurantLogin';
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/UserSignIn">
          <UserSignIn />
        </Route>
        <Route path="/UserSignUp">
          <UserSignUp />
        </Route>
        <Route path="/LogIn">
          <LogIn />
        </Route>
        <Route path="/SignUp">
          <SignUp />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
        <Route path="/restaurant/:id">
          <Restaurant />
        </Route>
        <Route path="/SignUpAsRestaurant">
          <RegisterRestaurents />
        </Route>
        <Route path="/reservation/:id">
          <Reserve />
        </Route>
        <Route path="/dash">
          <RestaurantDash />
        </Route>
        <Route path="/restaurantLogin">
          <LoginRestaurents />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
