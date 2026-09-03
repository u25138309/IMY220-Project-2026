import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {
    //popup, use localstorage 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        if (email.trim() === "") {
            setError("Email is required.");
            return;
        }
        if (password.trim() === "") {
            setError("Password is required.");
            return;
        }
        setError("");
        fetch("http://localhost:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
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
            setError("Invalid email or password.");
        });
    }

    return (
        <div className="form-popup">
            <h1>Login</h1>

            <form id="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                {error && <p className="error">{error}</p>}

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login