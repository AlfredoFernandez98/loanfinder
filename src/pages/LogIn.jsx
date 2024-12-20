import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import facade from "../util/apiFacade";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 20vh;
  text-align: center;
  padding-top: 3rem;
  h2 {
    font-size: 2rem;
    color: #4e8bf4;
    margin-bottom: 1.5rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 300px;

    input {
      padding: 0.5rem;
      font-size: 1.2rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;

      &:focus {
        border: 1px solid #4e8bf4;
      }
    }
    button {
      padding: 0.4rem;
      font-size: 1rem;
      color: white;
      background-color: #4e8bf4;
      border: none;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #367dd9;
      }
    }
  }
  @media (max-width: 768px) {
    padding-top: 1rem; /* Mindre afstand for små skærme */
  }
`;



const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  button {
    flex: 1;
  }
`;

function LogIn({ login }) {
  const navigate = useNavigate();
 
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  

  const performLogin = (evt) => {
    evt.preventDefault();

    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      <form onSubmit={performLogin}>
        <input
          placeholder="User Name"
          id="username"
          onChange={onChange}
          value={loginCredentials.username}
        />
        <input
          placeholder="Password"
          id="password"
          type="password"
          onChange={onChange}
          value={loginCredentials.password}
        />
        <ButtonGroup>
          <button type="submit">Login</button>
          <button type="button" onClick={() => navigate("/signup")}>
            Sign Up
          </button>
        </ButtonGroup>
      </form>
    </LoginContainer>
  );
}

export default LogIn;
