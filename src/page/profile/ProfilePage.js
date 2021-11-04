import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'

export default function ProfilePage({users}) {
    return (
        <div>
            <Header/>
            {users.map((x)=> <Profile user={x}/>)}
        </div>
    )
}
