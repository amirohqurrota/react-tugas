import { Component,useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import {gql, useMutation, useLazyQuery} from "@apollo/client";
import Loader from "react-loader-spinner";
import GetPassengerBy from "./GetPassengerBy";

const GetAllPassenger=gql`
query MyQuery {
    passenger {
      id
      nama
      jenisKelamin
      umur
    }
  }`

const DeleteById=gql`
mutation MyMutation($id: Int!) {
    delete_passenger_by_pk(id: $id) {
    nama
    umur
    }
}  
`
const AddData=gql`
mutation MyMutation2($object: passenger_insert_input = {}) {
    insert_passenger_one(object: $object){
      nama
    }
  }
`

const GetDataById=gql`
query MyQuery($id: Int!) {
    passenger(where: {id: {_eq: $id}}) {
      id
    }
  }

`

function Home(){
    const [getData,{data, loading, error}]=useLazyQuery(GetAllPassenger);
    const [seacrhDataById,{singleData, load, err}]=useLazyQuery(GetDataById);
    const [deletePassenger] = useMutation(DeleteById, { refetchQueries: [GetAllPassenger] })
    const [AddNewData] = useMutation(AddData, { refetchQueries: [GetAllPassenger] })
    //const [listPassenger, setListPassenger] = useState([]);

    useEffect(() => {
        getData()
        // setListPassenger(data?.passenger)
        // console.log("useEffect runnig", listPassenger)
    }, [])

    
    if (loading){
        return <Loader type="ThreeDots" height={100} width={100} />
    }
    if (error){
        console.log("error : ",error)
        return null
    }
    
    const hapusPengunjung = (id) => {
        deletePassenger({
            variables:{
                id
            }
        })
    }
    const tambahPengunjung = newUser => {
        const newData = {
            id: uuidv4(),
            ...newUser
        }; 
        AddNewData({
            variables:{
                newData
            }
        })
    };

    const cariPengunjung=(id)=>{
        seacrhDataById({
            variables:{
                id
            }
        })
        return singleData
    }
    console.log("listt: ", data?.passenger)
    return (
        <div>
            <Header/>
            {/* <h1>{ListPassenger}</h1> */}
            {/* <p>{JSON.stringify(data?.passenger)}</p> */}
            <GetPassengerBy cariPengunjung={cariPengunjung}/>
            {loading ? <Loader type="ThreeDots" height={100} width={100} /> : <ListPassenger data={data?.passenger} hapusPengunjung={hapusPengunjung}/>
            }
            <PassengerInput
                tambahPengunjung={tambahPengunjung}
            />
        </div>
        )
}

// function Homee(){
//     const {data, loading, error}=useQuery(GetAllPassenger)
//     return(
//         <div>
//             <h1>{JSON.stringify(data)}</h1>
//         </div>
//     )
// }

export default Home