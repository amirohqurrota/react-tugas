import React from 'react'

export default function Header({text}) {
    return (
        <div style={{padding:"8px", boxShadow:"6px 7px 5px 0px rgba(0, 0, 0, 0.21)"}}>
            <h4>{text}</h4>
        </div>
    )
}
