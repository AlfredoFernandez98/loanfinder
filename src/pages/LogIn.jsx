import React, { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: var(--space-8) var(--space-4);
  width: 100%;
  max-width: var(--max-width-md);
  margin: 0 auto;
`;

const LoginCard = styled.div`
  background: white;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--gray-200);
  padding: var(--space-12) var(--space-8);
  width: 100%;
  max-width: 420px;
  text-align: center;
`;

const LoginHeader = styled.div`
  margin-bottom: var(--space-8);
  
  h2 {
    font-size: var(--font-size-3xl);
    font-weight: 700;
    color: var(--gray-900);
    margin-bottom: var(--space-2);
  }
  
  p {
    font-size: var(--font-size-base);
    color: var(--gray-600);
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  text-align: left;
  
  label {
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--gray-700);
  }
  
  input {
    padding: var(--space-3) var(--space-4);
    font-size: var(--font-size-base);
    border: 2px solid var(--gray-200);
    border-radius: var(--radius-lg);
    transition: all 0.2s ease-in-out;
    background: var(--gray-50);
    
    &::placeholder {
      color: var(--gray-400);
    }
    
    &:focus {
      outline: none;
      border-color: var(--primary-500);
      background: white;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    &:hover {
      border-color: var(--gray-300);
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  margin-top: var(--space-4);
`;

const PrimaryButton = styled.button`
  padding: var(--space-4) var(--space-6);
  font-size: var(--font-size-base);
  font-weight: 600;
  color: white;
  background: var(--primary-600);
  border: none;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  box-shadow: var(--shadow-md);
  
  &:hover {
    background: var(--primary-700);
    transform: translateY(-1px);
    box-shadow: var(--shadow-lg);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    background: var(--gray-300);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SecondaryButton = styled.button`
  padding: var(--space-3) var(--space-6);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--primary-600);
  background: white;
  border: 2px solid var(--primary-200);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background: var(--primary-50);
    border-color: var(--primary-300);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: var(--space-6) 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--gray-200);
  }
  
  span {
    padding: 0 var(--space-4);
    font-size: var(--font-size-sm);
    color: var(--gray-500);
    background: white;
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
      <LoginCard>
        <LoginHeader>
          <h2>Velkommen tilbage</h2>
          <p>Log ind for at fortsætte til din konto</p>
        </LoginHeader>

        <LoginForm onSubmit={performLogin}>
          <InputGroup>
            <label htmlFor="username">Brugernavn</label>
            <input
              id="username"
              type="text"
              placeholder="Indtast dit brugernavn"
              onChange={onChange}
              value={loginCredentials.username}
              required
            />
          </InputGroup>

          <InputGroup>
            <label htmlFor="password">Adgangskode</label>
            <input
              id="password"
              type="password"
              placeholder="Indtast din adgangskode"
              onChange={onChange}
              value={loginCredentials.password}
              required
            />
          </InputGroup>

          <ButtonGroup>
            <PrimaryButton type="submit">
              Log ind
            </PrimaryButton>
            
            <Divider>
              <span>eller</span>
            </Divider>
            
            <SecondaryButton type="button" onClick={() => navigate("/signup")}>
              Opret ny konto
            </SecondaryButton>
          </ButtonGroup>
        </LoginForm>
      </LoginCard>
    </LoginContainer>
  );
}

export default LogIn;
