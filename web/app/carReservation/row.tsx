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

    return (
        <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
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
            <td>                
                <div className={styles.line}>
                    <p>{item.carType}</p>
                </div>        
                <div className={styles.line}>
                    <p>Р724OН</p>
                </div> 
            </td>
            <td className={styles.edit}>
                <button className={styles.btn}>
                    Редактировать
                </button>
            </td>
        </tr> 
    );
}