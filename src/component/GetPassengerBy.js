import {React, useState} from 'react'

export default function GetPassengerBy(props) {
    const [id, setId] = useState(0)
    const [dataOnePassenger, setDataOnePassenger] =useState("")
    const onChange = e => {
        setId(e.target.value)
    }
    const submitHandle=e=>{
        const a=props.cariPengunjung(id)
        console.log("search ", a)
    }
    
    return (
        <div>

                <label for="ID">Input id passenger:</label>
                <input type="text" id="id" name="id" onChange={onChange}/><br/>
                <button type="submit" onClick={submitHandle} >cari</button>
                <div>
                    <p></p>
                </div>
            
        </div>
    )
}
