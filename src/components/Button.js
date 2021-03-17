import React from 'react'

const Button = ({ title }) => {
    return (
        <button style={btnStlye}>
            {title}
        </button>
    )
}

const btnStlye = {
    color: '#fff',
    background: 'linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%)',
    borderWidth: 0,
    padding: '0.6rem 3rem',
    borderRadius: '2px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    letterSpacing: '1px',
    cursor: 'pointer'
}

export default Button
