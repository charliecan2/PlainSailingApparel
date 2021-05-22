import React from 'react'
import './CustomButton.scss'

function CustomButton({ children, ...otherProps}) {
    return (
        <button className='customButton' {...otherProps}>
            {children}
        </button>
    )
}

export default CustomButton
