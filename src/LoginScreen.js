import React, { useState } from "react";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // You would typically make an API call to the backend for authentication here.
    // For simplicity, we'll just check hardcoded values here.
    if (username === "exampleuser" && password === "examplepassword") {
      setLoggedIn(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleSignup = () => {
    console.log('Clicked signUp')
  }

  if (loggedIn) {
    return <div>Welcome, {username}!</div>;
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
};

export default LoginScreen;