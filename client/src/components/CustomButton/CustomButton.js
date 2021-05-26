import React from 'react'
import './CustomButton.scss'

function CustomButton({ children, isGoogleSignIn, ...otherProps}) {
    return (
        <button 
            className={`${isGoogleSignIn ? 'googleSignIn' : ''} customButton`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default CustomButton
