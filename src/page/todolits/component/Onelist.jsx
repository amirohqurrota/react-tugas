import React from 'react';
import styles from './Onelist.module.css';

export default function Onelist({data}) {
    const completed=data.completed
    console.log("completed :", completed)
    return (
        <div>
            <div className={styles.box}>
                <p className={styles.oneList} style={completed ? {textDecoration : "line-through"}:{textDecoration : "none"}}> {data.title}</p>
            </div>
        </div>
    )
}
