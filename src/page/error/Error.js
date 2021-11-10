import React from 'react'
import './error.css'
import ImageError from './error.png'
import {useNavigate} from "react-router-dom";


export default function Error() {
    const errorImage= ImageError
    const navigate = useNavigate()
    const goHome=navigate("/")
    return (
        <div className="error-content">
            <div className="container-image-error">
            <img src={errorImage} className="imgErr" alt="" />  
            </div>
            <h2>Oops! Something went wrong!</h2>
            <button onClick={goHome} className="buttonErr">return to home</button>
        </div>
    )
}
