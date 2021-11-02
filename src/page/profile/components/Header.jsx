import React from 'react'

export default function header({text}) {
    return (
        <div style={{background: "grey", padding:"5px 10px", marginBottom: 20}}>
            <h1>{text}</h1>
        </div>
    )
}
