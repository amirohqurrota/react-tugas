import { Component,useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import {gql, useMutation, useLazyQuery, useSubscription} from "@apollo/client";
import Loader from "react-loader-spinner";
import GetPassengerBy from "./GetPassengerBy";

const SubscriptionData=gql`
subscription MySubscription {
    passenger {
        id
        jenisKelamin
        nama
        umur
    }
    }
`

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
      id
    }
  }
`

const GetDataById=gql`
query MyQuery2($id: Int!) {
    passenger(where: {id: {_eq: $id}}) {
      id
      nama
      umur
    }
  }

`

const UpdateById=gql`
mutation UpdateById($update: passenger_set_input = {}, $id: Int!) {
    update_passenger(where: {id:{_eq: $id}}, _set: $update) {
      returning {
        id
        nama
        umur
      }
    }
  }
`

function Home(){
    const {data, loading, error}=useSubscription(SubscriptionData);
    
    //const [getData,{data, loading, error}]=useLazyQuery(GetAllPassenger);
    const [searchDataById,{data:singleData, loading:load, error:err}]=useLazyQuery(GetDataById);
    const [deletePassenger] = useMutation(DeleteById)
    const [editPassenger] = useMutation(UpdateById)
    const [AddNewData] = useMutation(AddData)
    const [dataPassengerById, setDataPassengerById] =useState("")

    // useEffect(() => {
    //     getData()
    // },[data])

    useEffect(() => {
        if (!load) {
            setDataPassengerById(singleData?.passenger)
        }
    }, [load, singleData])
    
    if (loading){
        return <Loader type="ThreeDots" height={100} width={100} />
    }
    if (error){
        console.log("error : ",error)
        return null
    }
    
        
    if (load){
        console.log("loading get single data")
        return <Loader type="ThreeDots" height={100} width={100} />

    }
    if (err){
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

    const editPengunjung=(id,update)=>{
        console.log("edit klik")
        console.log(update)
        editPassenger({
            variables:{
                id,
                update
            }
        }
        )

    }

    const tambahPengunjung = newUser => {

        AddNewData({
            variables:{
                object:newUser
                
            }
        })
    };

    const cariPengunjung=(id)=>{
        searchDataById({
            variables:{
                id
            }
        })
    }

    return (
        <div>
            <Header/>
            {/* <h1>{ListPassenger}</h1> */}
            <p>"data by search :",{JSON.stringify(data?.passenger)}</p>
            <GetPassengerBy cariPengunjung={cariPengunjung} data={dataPassengerById} loading={load}/>
            <ListPassenger data={data?.passenger} editPengunjung={editPengunjung} hapusPengunjung={hapusPengunjung}/>
            <PassengerInput
                tambahPengunjung={tambahPengunjung}
            />
        </div>
        )
}


export default Home