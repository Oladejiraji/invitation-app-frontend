import React from 'react'
import GoogleLoginButton from '../components/GoogleLoginButton'
import Header from '../components/Header'
import Showcase from '../components/Showcase'

const Landing = () => {
    return (
        <>
            <Header />
            <Showcase />
            <GoogleLoginButton />
        </>
    )
}

export default Landing
