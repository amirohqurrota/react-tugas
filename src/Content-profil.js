import React from 'react';
import App_form from './App_ContactUs';

export default function Content_profil() {
    return (
        <div className="row ms-5 justify-content-evenly align-items-center py-5">
        <div className="col-sm-4 bg-black rounded-circle photo-content"> </div>
        <div className="col-sm-8 bg-red my-0 justify-content-center">
            <h4>Hi, my name is</h4>
            <p className="display-2 fw-bold">Anne Sullivan</p>
            <h3>I Build Thing for The Web</h3>
            <div >
                <button type="button" className="btn btn-dark rounded-pill px-4" onClick={App_form}>Get In Touch</button>
            </div>
        </div>
    </div>
    )
}
