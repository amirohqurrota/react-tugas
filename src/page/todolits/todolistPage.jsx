import React from 'react'
import Onelist from './component/Onelist'
import Header from './component/Header'


export default function TodolistPage({datas}) {

    return (
        <div>
            <Header text="To Do App"/>
            <div style={{padding: "30px"}}>
                {datas.map((x)=> <Onelist data={x}/>)}
            </div>
        </div>
    )
}
