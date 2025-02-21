import "./navbar.css";

function NavBar() {
    return <div className="nav-container">
        <div className="nav-link">
            <h2 className="heading">Shortly</h2>
            <span className="links">Feature</span>
            <span className="links">Price</span>
            <span className="links">Resource</span>
        </div>
        <div className="nav-acct">
        <button className="login  login-signup-btn">Login</button>
        <button className="signup login-signup-btn">Sign Up</button>
        </div>
        <div className=""></div>
    </div>
}

export default NavBar;