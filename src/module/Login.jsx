import React, { useState } from "react";
import { LOGIN } from "../services/query";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMutation] = useMutation(LOGIN);

  const handleLogin = async () => {
    try {
      const { data } = await loginMutation({
        variables: { username, password },
      });
      if (data.login.accessToken && data.login.successful) {
        localStorage.setItem("token", data.login.accessToken);
        navigate("/");
      } else {
        alert("รหัสผ่านไม่ถูกต้อง");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <div className="login-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
