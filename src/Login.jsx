import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  async function handleLogin() {
    if (username === '' || password === '') {
      setError('Please enter username and password')
      return
    }

    setError('')

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })

      if (!response.ok) {
        setError('Invalid username or password')
        return
      }

      const data = await response.json()

      

      navigate('/students')
    } catch (error) {
      setError('Something went wrong. Please try again.')
    }
  }

return (
  <div className="login-page">
    <div className="login-box">
      <h1>Login</h1>

      <label>Username</label>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label>Password</label>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      {error && <p className="error">{error}</p>}
    </div>
  </div>
)
}

export default Login    