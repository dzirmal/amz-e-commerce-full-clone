import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../Helpers/firebase'
import { Button, Links } from '../../Helpers/globalStyles'
import {
  EmailAndPassword,
  Form,
  Input,
  Login,
  LoginContainer,
  LoginDiv,
  LoginLogo,
  Text,
} from './LoginPage.elements'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const signIn = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/')
        }
      })
      .catch((err) => alert(err.message))
  }

  const signUp = (e) => {
    e.preventDefault()
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/')
        }
      })
      .catch((err) => alert(err.message))
  }

  return (
    <LoginContainer>
      <Links to='/'>
        <LoginLogo
          src='http://pngimg.com/uploads/amazon/amazon_PNG21.png'
          alt='Amazon Logo'
        />
      </Links>
      <LoginDiv>
        <Login>Sing-in</Login>
        <Form>
          <EmailAndPassword>E-mail</EmailAndPassword>
          <Input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <EmailAndPassword>Password</EmailAndPassword>
          <Input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button primary big className='login__btn' onClick={signIn}>
            Sign In
          </Button>
        </Form>
        <Text>
          By sign in you agree to AMAZON'S FAKE CLONE Terms of Service and
          Conditions of Use & Sale. Please see our Private Notice, out Cookies
          Notice, and our Interest-Based Ads Notice. "This website is for the
          purpose of portfolio to get a JOB"
        </Text>
        <Button big className='register__btn' onClick={signUp}>
          Create Your Amazon Account
        </Button>
      </LoginDiv>
    </LoginContainer>
  )
}

export default LoginPage
