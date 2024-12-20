import React, { useState } from "react";
import styled from "styled-components";
import facade from "../util/apiFacade";
import { Await } from "react-router";

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
    name: "",
  });

  const onChange = (evt) => {
    const value = evt.target.value;
    const id = evt.target.id;
    setCredentials({
      ...credentials,
      [id]: value,
    });
  };

  const handleSignUp = async (evt) => {
    evt.preventDefault();
  
    try {
      // Payload til backend
      const payload = {
        username: credentials.username, // Brugernavn
        password: credentials.password, // Password
        name: credentials.name          // LoanUser's navn
      };
  
      // Send POST-anmodning til /loanuser/register
      const response = await facade.fetchData("/users/register", "POST", payload);
  
      alert("User and LoanUser created successfully!");
      console.log("Response:", response);
  
      // Ryd formularen efter succes
      setCredentials({ username: "", password: "", name: "" });
    } catch (err) {
      const fullError = await err.fullError;
      console.error("Backend error:", fullError);
      alert(`Error: ${fullError.message || "Unknown error occurred"}`);
    }
  };

  return (
    <SignUpContainer>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        {/* Input til username */}
        <input
          placeholder="User Name"
          id="username"
          value={credentials.username}
          onChange={(e) => onChange(e)}
        />
        {/* Input til password */}
        <input
          placeholder="Password"
          id="password"
          type="password"
          value={credentials.password}
          onChange={(e) => onChange(e)}
        />
        {/* Input til name */}
        <input
          placeholder="Loan User Name"
          id="name"
          value={credentials.name}
          onChange={(e) => onChange(e)}
        />
        {/* Submit knap */}
        <button type="submit">Sign Up</button>
      </form>
    </SignUpContainer>
  );
  
}

export default SignUp;
