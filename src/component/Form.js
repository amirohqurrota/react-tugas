import React from 'react'
import { useState, useRef } from 'react';
import './form.css'
import validator from 'validator';

export default function Form() {
    const dataKosong={
        nama:"",
        email: "",
        noHandphone: "",
        kelasCoding: "",
        harapan:"",
    }

    const [data, setData] = useState(dataKosong)
    const regex = /^[A-Za-z]*$/;
    const regexPhone = /^[0-9\b]+$/;
    let [errName, setErrName] = useState("")
    let [errEmail, setErrEmail] = useState("")
    let [errNoHP, setErrNoHP] = useState("")
    const listError =[errName, errEmail, errNoHP]
    const handleInput=e=>{
        const name= e.target.name;
        const value=e.target.value;
        
        if (name==="nama"){
            if(regex.test(value)){
                setErrName("")
            }else{
                setErrName("Nama lengkap harus berupa huruf")
            }
        }
        if(name==="email"){
            if(validator.isEmail(value)){
                setErrEmail("")
            }else{
                setErrEmail("Alamat Email Tidak Valid")
            }
        }
        if(name==="noHandphone"){
            if(regexPhone.test(value) && value.length >= 9 && value.length <= 14){
                setErrNoHP("")
            }else{
                setErrNoHP("No Handphone Hanya Terdiri dari 9-14 Angka")
            }
        }


        setData({
            ...data,
            [name]: value
        })
        
    }

    const handleSubmit = (event)=>{
        if(errName !== "" && errNoHP !== "" && errEmail !== ""){
            alert("terdapat data yang tidak sesuai")
            event.preventDefault()
        }else{
            alert(`data peserta atas nama "${data.nama}" berhasil terdaftar`)
        }
        
    }

    const resetData=()=>{
        setData(dataKosong)
        setErrName=""
        setErrEmail=""
        setErrNoHP=""
    }

    return (
        <div className="container-form">
            <h1 style={{"textAlign":"center"}}>Pendaftaran Peserta Coding Bootcamp</h1>
            <form onSubmit={handleSubmit}>
                <label className="label-input" for="nama" >Nama Lengkap :</label> 
                <input type="text" name="nama" id="nama" className="input-form" onChange={handleInput} value={data.nama} required/>
                
                <label className="label-input">Email :</label>
                <input type="text" name="email" className="input-form" onChange={handleInput} value={data.email} required/>
                
                <label className="label-input">No Handphone :</label>
                <input type="text" name="noHandphone" className="input-form" onChange={handleInput} value={data.noHandphone} required/>
                
                Latar Belakang Pendidikan :
                <div className="radiobox">
                <input type="radio" id="IT" name="pendidikan" onChange={handleInput} required/>
                <label for="IT">IT</label>
                <input type="radio" id="NonIT" name="pendidikan" onChange={handleInput} required />
                <label for="NonIT">Non IT</label>
                </div>

                <label className="label-input">Kelas Coding Yang Dipilih :</label>
                <select name="kelas" className="input-form" >
                <option value="none" selected disabled hidden>Pilih Salah Satu Program</option>
                <option value="machineLearning">Coding Backend with Golang</option>
                <option value="fullstack">Coding Frontend with ReactJS</option>
                <option value="dataScience">Fullstack Developer</option>
                </select>
                
                <div >
                <label for="chooseFile" >Foto Surat Kesungguhan</label>
                <input type="file" id="myfile" name="myfile" style={{"width":"100%", "marginBottom":"1em"}} />
                </div>
                

                <label className="label-input">Harapan Untuk Coding Bootcamp  ini:</label>
                <textarea rows="4" cols="50" className="input-form"/>
                {listError.map((message)=>(<span className="errorMessage">{message} <br/></span>))}

                
                <input className="submit-form" type="submit" value="Submit" />
                <button onClick={resetData} className="reset-form">Reset</button>
            </form>
        </div>
    )
}
