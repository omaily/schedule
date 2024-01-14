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
        <div className={styles.row}>

            <div className={styles.days}>
                {item.name}
            </div>
            
            <div className={styles.days}>
                {item.carType}
            </div>
            
            <div className={styles.days}>
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
            </div>
            
            <div className={styles.days}>
                <p>{item.carType}</p>
            </div>
            
            <div className={styles.days}>
                В Работе
            </div>
            
            <div className={styles.days}>
                <p>{date} </p>
                <p>{date} </p>
            </div>
            
            <div className={styles.days}>
                <button className={styles.btn}>
                    O
                </button>
            </div>

        </div> 
    );
}