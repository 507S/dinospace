import dinoLogo from './images/dinoLogo.png';

const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/restaurantLogin";
  };

const navbar = () => {
    return (
        <div className="navbar">
            <a href="/" className='home-link'><img className="dinologo" src={dinoLogo} /></a>
            <h1>DinoSpace</h1>
            <div className="links">
                <a href="/UserSignUp">Sign Up</a>
                <a href="/UserSignIn">Sign In</a>
                <a href="/Profile">Profile</a>
                <a href="/"onClick={handleLogout}>logout</a>
            </div>
        </div>
    );
}

export default navbar;
