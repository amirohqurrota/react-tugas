import React from 'react';
import styles from './Profile.module.css';

export default function profile({user}) {
    

    return (
        <div className={styles.card}>
            <img className={styles.avatar} src={user.avatar} alt="" />
            <div className={styles.cardContent} >
                <h5>{user.first_name} {user.last_name}</h5>
                <p>{user.email}</p>
            </div>
        </div>
    )
}
