import React from 'react'
import './CustomButton.scss'

function CustomButton({ children, isGoogleSignIn, inverted, ...otherProps}) {
    return (
        <button 
            className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'googleSignIn' : ''} customButton`}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default CustomButton
