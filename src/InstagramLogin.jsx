import React, { useState } from 'react';

const InstagramLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for authentication logic
    if (username === 'ibrahimpatan786@gmail.com' && password === 'Sana@786') {
      alert('Login successful');
      // Redirect to another page or perform other actions here
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Instagram</h2>
      <form onSubmit={handleLogin}>
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
        {error && <p className="error">{error}</p>}
        <button type="submit">Log In</button>
      </form>
      <p className="signup-link">
        Don't have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default InstagramLogin;
