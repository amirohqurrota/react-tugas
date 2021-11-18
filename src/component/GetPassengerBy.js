import {React, useState} from 'react'
import Loader from "react-loader-spinner";

export default function GetPassengerBy(props) {
    const [id, setId] = useState(0)
    const [dataFoundStr, setDataFoundStr] = useState("no data")
    
    
    // console.log("GetPassBy", props.cariPengunjung)
    const onChange = e => {
        setId(e.target.value)
        dataFoundFunc()
    }
    const submitHandle=()=>{
        //console.log(props.cariPengunjung)
        props.cariPengunjung(id)
    }
    function dataFoundFunc(){
        console.log("datafunc",props.data)
        if (props.data!=undefined){
            setDataFoundStr("yeay data found")
    }
    }
    

    return (
        <div>
            <label for="ID">Input id passenger:</label>
            <input type="text" id="id" name="id" onChange={onChange}/><br/>
            <button type="submit" onClick={submitHandle} >cari</button>
            <div>
                <p>data by search id {id} = {JSON.stringify(props.data)==="[]"?"data not found" : JSON.stringify(props.data)}</p>
                {/* {props.loading?<Loader type="ThreeDots" height={100} width={100} /> : <p>{dataFoundStr}</p>}
                <p>cek</p> */}
            </div>
        </div>
    )
}
