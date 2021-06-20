import React, { useState } from 'react'
import { auth, createProfileDocument } from '../Firebase/Firebase.utils';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import { SignUpContainer, TitleContainer } from './SignUp.styles'

function SignUp() {
    const [signUpData, setSignUpData] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = signUpData;

    const handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = signUpData;

        if(password !== confirmPassword){
            alert("Passwords do not match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createProfileDocument(user, { displayName })

            setSignUpData({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = event => {
        event.preventDefault();

        const { name, value } = event.target;

        setSignUpData({...signUpData, [name]: value});
    }
    
    return (
        <SignUpContainer>
            <TitleContainer>I do not have an account</TitleContainer>
            <span>Sign up with your email with password</span>
            <form className='signUpForm' onSubmit={handleSubmit}>
                <FormInput
                type='text'
                name='displayName'
                value={displayName}
                onChange={handleChange}
                label='Display Name'
                required
                />
                <FormInput
                type='email'
                name='email'
                value={email}
                onChange={handleChange}
                label='Email'
                required
                />
                <FormInput
                type='password'
                name='password'
                value={password}
                onChange={handleChange}
                label='Password'
                required
                />
                <FormInput
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                label='Confirm Password'
                required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </SignUpContainer>
    )
}

export default SignUp;
