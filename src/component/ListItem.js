import "./Home.css"
import { useState, useEffect } from "react"

const ListItem = (props) => {
    // console.log(props.editPengunjung)
    const { id, nama, umur, jenisKelamin } = props.data
    const [state, setState] = useState({
        nama: nama,
        umur: umur,
        jenisKelamin: jenisKelamin,
    })

    const onChange = (e) => {
    setState({
        ...state,
        [e.target.name]: e.target.value,
    })
    }

    const [boolDisplay, setBoolDisplay]=useState(false)
    const editClicked=()=>{
        setBoolDisplay(!boolDisplay)
    }
 
    const submitEdit=()=>{
        setBoolDisplay(false)
        props.editPengunjung(id,state)
    }

    return (
        <tr>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenisKelamin}</td>
            <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td>
            <td className="removeBorder" onClick={editClicked}><button>Edit</button></td>
            <div style={boolDisplay?{display:"block"}:{display:"none"}}>
                <td><input className="removeBorder" name="nama" value={state.nama} onChange={onChange} placeholder="update nama"/></td>
                <td><input className="removeBorder" name="umur" value={state.umur} onChange={onChange} placeholder="update umur"/></td>
                <td><input className="removeBorder" name="jenisKelamin" value={state.jenisKelamin}onChange={onChange}  onChange={onChange} placeholder="update kelamin"/></td>
                <td className="removeBorder" onClick={submitEdit}><button>Submit Edit</button></td>
            </div>
        </tr>
    )
}

export default ListItem;