import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { LoaderLottie } from '../Helper/Lottie'
import '../css/modalAndLoader.css'


const Loader = ({loading}) => {
    return (
        <AnimatePresence>
            {
                loading && 
                <motion.div className='loader-bg'
                    key={Math.random()}
                    initial={{ x: 0, scale: 0,  }}
                    animate={{ x: 0, scale: 1, transition: {duration: 0.5 , type: 'spring', stiffness: 100} }}
                    exit={{ x: 0, scale: 0 , transition: {duration: 0.5, type: 'spring', stiffness: 100} }}
                >
                    <LoaderLottie />
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default Loader
