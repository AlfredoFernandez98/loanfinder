import React, { useState } from "react";
import styled from "styled-components";

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 35vh;

  text-align: center;

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
      padding: 10px;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      outline: none;

      &:focus {
        border: 1px solid #4e8bf4;
      }
    }

    button {
      padding: 10px;
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
`;

function SignUp() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
    email: "",
  });

  const onChange = (evt) => {
    const value = evt.target.value;
    setCredentials({
      ...credentials,
      [evt.target.id]: value,
    });
  };

  const handleSignUp = (evt) => {
    evt.preventDefault();
    console.log("User created:", credentials);
    alert("User registered successfully!");
  };

  return (
    <SignUpContainer>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          placeholder="User Name"
          id="username"
          value={credentials.username}
          onChange={onChange}
        />
        <input
          placeholder="Password"
          id="password"
          type="password"
          value={credentials.password}
          onChange={onChange}
        />
        <input
          placeholder="Email"
          id="email"
          type="email"
          value={credentials.email}
          onChange={onChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </SignUpContainer>
  );
}

export default SignUp;
