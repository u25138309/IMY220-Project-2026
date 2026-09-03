const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const users = [
    {
        id: 1,
        username: "JohnDoe",
        email: "john@gmail.com",
        password: "password123",
        profilePicture: null
    },
    {
        id: 2,
        username: "SarahSmith",
        email: "sarah@gmail.com",
        password: "password123",
        profilePicture: null
    }
];

// Login endpoint
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    const user = users.find(
        (user) =>
            user.email === email &&
            user.password === password
    );

    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password."
        });
    }

    res.json(user);
});

// Sign-up endpoint
app.post("/api/signup", (req, res) => {
    const { username, email, password, profilePicture } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "All fields, except profilePicture, are required."
        });
    }

    const newUser = {
        id: users.length + 1,
        username: username,
        email: email,
        password: password,
        profilePicture: profilePicture || null
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});