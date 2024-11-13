import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    if (!username || !password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }

    axios
      .post("http://localhost:5000/login", { username, password })
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          alert(res.data.message);
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        setLoading(false);
        if (err.response && err.response.data) {
          setError(err.response.data.message);
        } else {
          setError("An error occurred. Please check your connection.");
        }
      });
  };

  return (
    <>
      <div className="text">
        <h3>Login Page</h3>
      </div>
      <form onSubmit={handleLogin} id="loginForm">
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            username
          </label>
          <input
            type="text"
            placeholder="Username"
            className="form-control"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="form-control"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="d-flex align-items-center">
            <button
              type="submit"
              className="btn btn-success me-5"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
        </div>
        {error && <div className="alert alert-danger mt-3">{error}</div>}
      </form>
    </>
  );
};

export default Login;
