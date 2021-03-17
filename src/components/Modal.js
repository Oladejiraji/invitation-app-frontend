import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import '../css/modalAndLoader.css'
import { ErrorLottie, CorrectLottie } from '../Helper/Lottie'


const Modal = ({modal, setModal}) => {
    const closeModal = (e)=>{
        if(e.target.classList.contains('modal')){
            setModal(prev => prev = null)
            console.log(123);
        }
    }


    return (

        <AnimatePresence
        >
            {modal && 
            <motion.div onClick={closeModal} className="modal"
                exit={{opacity: 0}}
            >
                <motion.div className="modal-content"
                key={Math.random()}
                initial={{ y: 300, opacity: 0,  }}
                animate={{ y: 0, opacity: 1, transition: {duration: 0.5 , type: 'spring', stiffness: 130} }}
                exit={{ y: 300, opacity: 0 , transition: {duration: 0.5, type: 'spring', stiffness: 100} }}


                // initial={{ scale:2, opacity: 0.5  }}
                // animate={{ scale:1, opacity: 1, transition: {duration: 0.5 , } }}
                // exit={{ scale: 2, transition: {duration: 0.5, } }}
                >
                    {modal.status === 'success' && <CorrectLottie /> }
                    {modal.status === 'error' && <ErrorLottie /> }
                    {modal.title && <div className="title">
                        <h2>{modal.title}</h2>
                    </div>}
                    {modal.details && <div className="details">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aperiam ad perferendis natus cum ut.</p>
                    </div>}
                    {modal.btnText && <div className={modal.status === 'success' ? 'modal-btn': 'modal-btn modal-btn-red'}>
                        <h3 onClick={()=>{setModal(null)}}>{modal.btnText}</h3>
                    </div>}
                </motion.div>
            </motion.div>
            }
        </AnimatePresence>
    )
}

export default Modal
