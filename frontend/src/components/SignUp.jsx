import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [picture, setPicture] = useState(null);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        if (username.trim() === "") {
            setError("Username is required.");
            return;
        }
        if (email.trim() === "") {
            setError("Email is required.");
            return;
        }
        if (password.trim() === "") {
            setError("Password is required.");
            return;
        }
        if (password.length < 8) {
            setError("Password must be at least 8 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setError("");
        fetch("http://localhost:3000/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                profilePicture: picture ? picture : null
            }),
        })
        .then((response) => { 
            if (!response.ok) {
                throw new Error("Invalid email or password.");
            }
            return response.json();
        })
        .then((data) => {
            localStorage.setItem("user", JSON.stringify(data));
            localStorage.setItem("loggedIn", "true");
            navigate("/home/global");
        })
        .catch((error) => {
            console.error("Error:", error);
            setError("Unable to create account.");
        });
    }

    //popup, like login but with different words
    return (
        <div className="form-popup">
            <h1>Sign Up</h1>
            <form id="signUpForm" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>

                <label htmlFor="picture">Profile Picture</label>
                <input type="file" id="picture" placeholder="Picture" accept="image/*" onChange={(e) => setPicture(e.target.files[0])} />

                {error && <p className="error">{error}</p>}

                <button type="submit">
                    Sign Up
                </button>
            </form>
        </div>
    )
}

export default SignUp