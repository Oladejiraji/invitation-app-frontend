import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { loginUser } from '../Helper/helper'

const GoogleLoginButton = () => {

    const responseGoogle1 = (response) => {
        console.log(response);
      }

      const responseGoogle = async (response) => {
        console.log(response.profileObj);
        const data = await loginUser(response.profileObj)
        console.log(data);
      }
    return (
        <>
            <br/>
            <br/>
            <GoogleLogin
                clientId={process.env.REACT_APP_CLIENT_ID}
                buttonText="Login With Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle1}
                cookiePolicy={'single_host_origin'}
                render={renderProps => (
                    <div className='google-btn'>
                        <div  onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        <i className="fab fa-google fa-2x"></i>
                            <h3>
                            Log In with Google
                            </h3>
                        </div>
                       
                    </div>
                )}
            />
        </>
    )
}

export default GoogleLoginButton
