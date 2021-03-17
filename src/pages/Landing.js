import React, { useState } from 'react'
import GoogleLoginButton from '../components/GoogleLoginButton'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Modal from '../components/Modal'
import Showcase from '../components/Showcase'

const Landing = () => {
    const [modal, setModal] = useState({title: 'successfully deleted', status: 'error', details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus assumenda illum odio ratione fugiat aut, sint nemo accusamus repudiandae quod voluptas eaque nostrum quas, dicta, dignissimos aliquid aperiam dolore?', btnText: 'Continue'})




    return (
        <>
            <Header />
            <Showcase />
            <GoogleLoginButton />
            <Modal setModal={setModal} modal={modal} />
            {/* <Loader loading={true} /> */}
            
        </>
    )
}

export default Landing
