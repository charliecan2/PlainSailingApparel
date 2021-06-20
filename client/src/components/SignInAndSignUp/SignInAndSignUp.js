import React from 'react';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

import { SignInAndSignUpContainer } from './SignInAndSignUp.styles'

function SignInAndSignUp() {
    return (
        <SignInAndSignUpContainer>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
    )
}

export default SignInAndSignUp
