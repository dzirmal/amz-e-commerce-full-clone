import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { auth } from '../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((err) => alert(err.message));
  };

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/');
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <LoginContainer>
      <Link to='/'>
        <LoginLogo
          src='http://pngimg.com/uploads/amazon/amazon_PNG21.png'
          alt='Amazon Logo'
        />
      </Link>
      <LoginDiv>
        <h1>Sing-in</h1>
        <Form>
          <h5>E-mail</h5>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className='login__btn' onClick={signIn}>
            Sign In
          </Button>
        </Form>
        <p>
          By sign in you agree to AMAZON'S FAKE CLONE Terms of Service and
          Conditions of Use & Sale. Please see our Private Notice, out Cookies
          Notice, and our Interest-Based Ads Notice. "This website is for the
          purpose of portfolio to get a JOB"
        </p>
        <Button className='register__btn' onClick={signUp}>
          Create Your Amazon Account
        </Button>
      </LoginDiv>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: white;
`;

const LoginLogo = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
`;

const LoginDiv = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
  & > h1 {
    font-weight: 500px;
    margin-bottom: 20px;
  }
  & > p {
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 12px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  & > h5 {
    margin-bottom: 5px;
  }
  & > input {
    height: 30px;
    margin-bottom: 10px;
    background-color: white;
    width: 98%;
  }
`;

const Button = styled.button`
  cursor: pointer;
  &.login__btn {
    background-color: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: black;
  }

  &.register__btn {
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    margin-top: 10px;
    border-color: darkgrey;
  }
`;
