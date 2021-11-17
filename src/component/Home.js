import { Component,useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import {gql, useQuery, useLazyQuery} from "@apollo/client";

const GetAllPassenger=gql`
query MyQuery {
    passenger {
      id
      nama
      jenisKelamin
      umur
    }
  }`

const listData = [
    {
        id: uuidv4(),
        nama: 'Yoga',
        umur: 22,
        jenisKelamin: 'Pria'
    },
    {
        id: uuidv4(),
        nama: 'Ria',
        umur: 19,
        jenisKelamin: 'Wanita'
    },
    {
        id: uuidv4(),
        nama: 'Fahmi',
        umur: 25,
        jenisKelamin: 'Pria'
    },
    {
        id: uuidv4(),
        nama: 'Lala',
        umur: 21,
        jenisKelamin: 'Wanita'
    },
    {
        id: uuidv4(),
        nama: 'Ivan',
        umur: 25,
        jenisKelamin: 'Pria'
    }
    ]

function Home(){
    //const [getData,{data, loading, error}]=useLazyQuery(GetAllPassenger);
    const {data, loading, error}=useQuery(GetAllPassenger);
    const [listPassenger, setListPassenger] = useState([]);

    // useEffect(() => {
    //     getData()
    //     setListPassenger(data?.passenger)
    //     console.log("useEffect runnig", listPassenger)
    // }, [])

    
    if (loading){
        console.log("loading...")
    }
    if (error){
        console.log("error : ",error)
        return null
    }
    
    const hapusPengunjung = id => {
        const newData=[...data.passenger.filter((item)=>{
            return item.id !== id;
        })]
        data=newData
    }
    
    
    // const tambahPengunjung = newUser => {
    //     const newData = {
    //         id: uuidv4(),
    //         ...newUser
    //     }; 
    //     setData([...data,newData])
    // };
    console.log("listt: ", data?.passenger)
    return (
        <div>
            <Header/>
            {/* <h1>{ListPassenger}</h1> */}
            <p>{JSON.stringify(data?.passenger)}</p>
            <ListPassenger 
                allData={data?.passenger}
                // hapusPengunjung={hapusPengunjung}
            />
            <PassengerInput
                // tambahPengunjung={tambahPengunjung}
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