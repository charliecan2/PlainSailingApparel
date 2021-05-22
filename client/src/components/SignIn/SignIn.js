import React, { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { signInWithGoogle } from '../Firebase/Firebase.utils';

import './SignIn.scss';

function SignIn(props) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleChange = event => {
        const { name, value } = event.target;

        setCredentials({ ...credentials, [name]: value});
    }

    const submitCredentials = event => {
        event.preventDefault();

        setCredentials({
            email: '',
            password: ''
        })
    }

    return (
        <div className='signIn'>
          <h1>I already have an account</h1>  
          <p>Sign in using your email and password</p>

          <form onSubmit={submitCredentials}>
            
            <FormInput 
              name='email' 
              id='email' 
              type='email' 
              label='email'
              value={credentials.email} 
              handleChange={handleChange}
              required
            />
            <FormInput 
              name='password' 
              id='password' 
              type='password'
              label='password'
              value={credentials.password} 
              handleChange={handleChange}
              required
            />
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton className="googleBtn" onClick={signInWithGoogle}>Google Sign In</CustomButton>
          </form>
        </div>
    )
}

export default SignIn
