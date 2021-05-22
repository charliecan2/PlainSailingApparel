import React, { useState } from 'react'

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

          <form>
              <input 
              name='email' 
              id='email' 
              type='email' 
              value={credentials.email} 
              onChange={handleChange}
              required
              />
              <label for='email'>Email</label>
              <input 
              name='password' 
              id='password' 
              type='password'
              value={credentials.password} 
              onChange={handleChange}
              required
            />
              <label for='password'>Password</label>

              <button onSubmit={submitCredentials}>Submit</button>
          </form>
        </div>
    )
}

export default SignIn
