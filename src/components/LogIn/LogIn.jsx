import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { selectUser } from "../../reducers/userSlice/userSlice";
import { login } from "../../reducers/userSlice/userSlice";

import { navigate } from "@reach/router";
import styled from "styled-components";

const LogIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(selectUser);
  console.log(user);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email: email,
        password: password,
        loggedIn: true,
      })
    );

    navigate(`/home`);
  };

  return (
    <LoginWrapper>
      <h2>Temporary pet care!</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1>Login Here!</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          disabled={name === "" || email === "" || password === ""}
        >
          Login
        </button>
      </form>
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://wallpaperaccess.com/full/266770.jpg');
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;

  h2{
    font-size: 40px;
    text-transform:uppercase;
  }

  form {
    display: flex;
    flex-direction: column;

    h1{
      font-size: 30px;
      margin- bottom: 15px;
      padding-bottom: 10px;
      letter-spacing: -1px;
    }

    input{
      min-width: 380px;
      padding: 20px 0;
      padding-left: 15px;
      margin-bottom: 10px;
      outline: none;
      border: 1px solid rgba(0,0,0,0.24);
      font-size: 15px;
      border-radius: 2px;
    }

    button{
      padding: 17px 30px;
      margin-top: 10px;
      background: black;
      border: none;
      color:white;
      font-size: 14px;
      border-radius: 3px;
      cursor: pointer;
    }

    button:disabled {
      background-color: #FFCC3E;
      cursor:not-allowed;
    }
  }
`;

export default LogIn;
