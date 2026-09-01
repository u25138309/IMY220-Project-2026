import { Link } from "react-router-dom";
function Navigation() {
    const loggedIn = localStorage.getItem("loggedIn") === "true";   //not sure

    return (
        <nav>
            <div className="logo">
                <img src="/logo.png" alt="Logo" />
            </div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to='/home:{}' >Global</Link></li>
                <li><Link to="/home">Local</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                {loggedIn && <li><Link to="/">Logout</Link></li> ||
                    <li><Link to="/login">Log In</Link></li>
                }
            </ul>
        </nav>
    );
}
export default Navigation;