import React, {useState} from "react";

const LoginStatus = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <div>
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
            {isLoggedIn && <p>You are logged in</p>}
            </div>
    );
};

export default LoginStatus;
