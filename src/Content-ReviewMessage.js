import React from 'react';
import App from './App.js';

export default function Content_ReviewMessage() {
    return (
        <div>
            <div className="col-md-12 container tabel">
            <table className="table table-borderless col-md-9">
                <tr className="mb-3">
                    <td className="label" >Full Name</td>
                    <td>:</td>
                    <td id="name"></td>
                </tr>
                <tr>
                    <td className="label" >Email Adress</td>
                    <td>:</td>
                    <td id="email"></td>
                </tr>
                <tr>
                    <td className="label" >Phone Number</td>
                    <td>:</td>
                    <td id="phone"></td>
                </tr>
                <tr>
                    <td className="label" >Nationality</td>
                    <td>:</td>
                    <td id="nationality"></td>
                </tr>
                <tr id="invisible">
                    <td>&nbsp;</td>
                </tr>
                <tr id="invisible">
                    <td>&nbsp;</td>
                </tr>
                <tr>
                    <td colspan="3" id="message"></td>
                </tr>
            </table>
            </div>
            <div className="col-md-12 d-flex justify-content-center">
                <div className="col-md-5 line"></div>
            </div>
            <div className="col-md-12 mt-4">
                <div>
                    <p className="fs-4 my-0">Thanks for contacting us!</p>
                    <p className="fs-4">We will be in touch with you shortly.</p>
                </div>
                <form onSubmit={App}>
                    <button type="submit"  className="btn rounded-pill px-4 py-2 font-weight-normal" >Home</button>
                </form>
            </div>
        </div>
    )
}
