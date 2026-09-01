function Login() {
    //popup

    return (
        <div>
            <h1>Login</h1>

            <form id="loginForm">
                <input type="email" placeholder="Email" required />

                <input type="password" placeholder="Password" required />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login