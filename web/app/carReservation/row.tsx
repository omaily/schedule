'use client'
import React, { ReactNode } from 'react';
import styles from './Row.module.css';

// get our material imports
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneIcon from '@mui/icons-material/Phone';

interface Order {
    id: number,
    name: string,
    price: number,
    user: User,
    carType: string,
}

interface User {
    name: string,
    number: number,
}

export default function Row(item: Order): ReactNode | null {
    let dat: Date = new Date();
    let YY = dat.getFullYear()
    let MM = dat.getMonth()
    let DD = dat.getDate()
    let hh = dat.getHours()
    let mm = dat.getMinutes()
    let date: String =  DD + "/" + MM + "/" + YY + " " + hh + ":" + mm 

    return (
        <tr className={styles.row}>

            <td>
                {item.name}
            </td>
            
            <td style={{ width: "140px",}}>
                {item.carType}
            </td>
            
            <td>
                <div className={styles.icons}>
                    <div className={styles.line}>
                        <AccountCircleIcon className={styles.faIcon}/>
                        <p>{item.user.name}</p>
                    </div>
                    <div className={styles.line}>
                        <PhoneIcon className={styles.faIcon}/>
                        <p>{item.user.number}</p>
                    </div>
                </div>
            </td>
            
            <td style={{ width: "140px",}}>
                <p>{item.carType}</p>
            </td>
            
            <td>В Работе</td>
            
            <td>
                <p>{date} </p>
                <p>{date} </p>
            </td>
            
            <td className={styles.edit}>
                <button className={styles.btn}>
                    O
                </button>
            </td>

        </tr> 
    );
}