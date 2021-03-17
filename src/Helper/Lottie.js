import React from 'react'
import { correctJSON } from '../Lottie/LottieJSON'

export const ErrorLottie =()=>{
    return(
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_y8t1nosz.json"  background="transparent"  speed="1"  style={{width: '150px', height: '150px'}}    autoplay></lottie-player>
    )
}

export const CorrectLottie =()=>{
    return(
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_XyS3mK.json"  background="transparent"  speed="1.5"  style={{width: '150px', height: '150px'}}    autoplay></lottie-player>
    )
}

export const LoaderLottie =()=>{
    return(
        <lottie-player src={correctJSON}   background="transparent"  speed="1" style={{maxWidth: '400px'}}    loop  autoplay></lottie-player>
    )
}








