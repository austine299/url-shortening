import "./navbar.css";
import {useState} from "react";


function NavBar() {
    const [displayNavBar, setDisplayNavBar] = useState(false)

    const showNavBar =()=>{
        setDisplayNavBar(!displayNavBar);
    }
    
    return <div className="nav-container">
        <div className="nav-link">
            <h2 className="heading">Shortly</h2>
            <div className="navbar navtogle">
                <span onClick={showNavBar} className="navbar-toggler-icon"></span>
            </div>
        </div>
        <div className="nav-acct-dektop">
            <div className="nav-list">
                <span className="links">Feature</span>
                <span className="links">Price</span>
                <span className="links">Resource</span>
            </div>
            
            <button className="login  login-signup-btn">Login</button>
            <button className="signup login-signup-btn">Sign Up</button>
        </div>:<></>

        {displayNavBar && 
            <div className="nav-acct-mobile">
                <div className="nav-list">
                    <span className="links">Feature</span>
                    <span className="links">Price</span>
                    <span className="links">Resource</span>
                </div>
                
                <button className="login  login-signup-btn">Login</button>
                <button className="signup login-signup-btn">Sign Up</button>
            </div>
        }
        <div className=""></div>
    </div>
}

export default NavBar;