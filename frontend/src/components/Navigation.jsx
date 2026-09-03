import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
function Navigation() {
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.setItem("loggedIn", "false");
        navigate("/");
    };

    return (
        <nav>
            <Logo />
            { /*styling needed here to match */}
            <ul className="nav-links">
                {loggedIn ?
                <>
                    <li><Link to='/home/global' >Global</Link></li>
                    <li><Link to="/home/local">Local</Link></li>
                    <li><Link to={`/profile/${localStorage.getItem("userId")}`}>Profile</Link></li>
                    <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
                </> : 
                    <li><Link to="/">Log In</Link></li>
                }
            </ul>
        </nav>
    );
}
export default Navigation;