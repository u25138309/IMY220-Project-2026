import Logo from "..components/Logo";
import Login from "..components/Login";
import SignUp from "..components/SignUp";

function Splash() {

    return (
        <div className="splash-page">
            <Logo />
            <div>
                <h1>Sharing Lives</h1>
                <p>LensFrame is a community-driven
                    photo sharing platform where you can
                    capture, upload, and share your
                    favourite moments with friends and
                    the world.</p>
                <img src="/splash-rainy.png" alt="Rainy Image" />
                <p>Explore inspiring photos, discover
                    new creators, organise your memories
                    into albums, and connect with others
                    through likes, comments, and
                    hashtags</p>
                <p>Whether you're a professional
                    photographer or simply enjoy
                    taking pictures, LensFrame is the
                    place to showcase your creativity
                    and discover amazing moments
                    Email shared by others.</p>
            </div>
            <div className="info-form" hidden><Login /></div>
            <div className="info-form" hidden><SignUp /></div>
            <div className="splash-buttons">
                <button onClick={() => {
                    document.querySelector(".info-form").hidden = false;
                    document.querySelectorAll(".info-form")[1].hidden = true;
                }}>Login</button>
                <button onClick={() => {
                    document.querySelectorAll(".info-form")[1].hidden = false;
                    document.querySelector(".info-form").hidden = true;
                }}>Sign Up</button>
            </div>
        </div>
    )
}

export default Splash