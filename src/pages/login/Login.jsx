import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { login } from "../../redux/apiCalls";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
    Navigate("/");
  };

  return (
    <div className="login">
      <form className="login__wrap">
        <input
          className="login__input"
          type="text"
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="login__input"
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login__btn" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
