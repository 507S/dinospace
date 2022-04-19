import GoogleLogin from "react-google-login";

const clientID = '357684101172-mpk3rivibeg6plt1go396fiapd55e7cl.apps.googleusercontent.com'


function Login()
{

    const onSuccess = (res) => {
        console.log("Login Successful! Current User: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Login Failed! res:", res);
    }

    return(
        <div id = "signInButton">
            <GoogleLogin
                clientId={clientID}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login