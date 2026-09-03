import Logo from "../components/Logo";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import { useState } from "react";
import rain from "../assets/splash-rainy.png"

function Splash() {
    const [form, setForm] = useState(null);

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
                <img src={rain} alt="Rainy Image" style={{ width: "10%", height: "auto" }} />
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
                    shared by others.</p>
            </div>
            {form === "login" && (
                <div className="info-form"> <Login /> </div>
            )}
            {form === "signup" && (
                <div className="info-form"> <SignUp /> </div>
            )}
            <div className="splash-buttons">
                <button onClick={() => setForm("login")}> Login </button>
                <button onClick={() => setForm("signup")}> Sign Up </button>
            </div>
        </div>
    )
}

export default Splash