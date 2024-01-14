// 'use client'
import React, { ReactNode } from 'react';
import styles from './CarReserv.module.css';
import Row from './tableBody/row'

export default function Home() {

    const columnName = [
        'понедельник', 
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
        'воскресенье'
    ]

    const food = [
        {id: 1, name: 'СТВ', price: 10, driver: 'Коля', phone: 10, carType: 'Пикап Повышеной проходимости'},
        {id: 2, name: 'КБР', price: 20, driver: 'Вася', phone: 10, carType: 'Микроавтобус'},
        {id: 3, name: 'ЦДКП', price: 3, driver: 'Коля', phone: +79098087060, carType: 'Легковой'},
        {id: 1, name: 'СТВ', price: 10, driver: 'Коля', phone: 10, carType: 'Пикап Повышеной проходимости'},
        {id: 2, name: 'КБР', price: 20, driver: 'Вася', phone: 10, carType: 'Микроавтобус'},
        {id: 3, name: 'ЦДКП', price: 3, driver: 'Коля', phone: +79098087060, carType: 'Легковой'},
        {id: 1, name: 'СТВ', price: 10, driver: 'Коля', phone: 10, carType: 'Пикап Повышеной проходимости'},
        {id: 2, name: 'КБР', price: 20, driver: 'Вася', phone: 10, carType: 'Микроавтобус'},
        {id: 3, name: 'ЦДКП', price: 3, driver: 'Коля', phone: +79098087060, carType: 'Легковой'},
        {id: 1, name: 'СТВ', price: 10, driver: 'Коля', phone: 10, carType: 'Пикап Повышеной проходимости'},
        {id: 2, name: 'КБР', price: 20, driver: 'Вася', phone: 10, carType: 'Микроавтобус'},
        {id: 3, name: 'ЦДКП', price: 3, driver: 'Коля', phone: +79098087060, carType: 'Легковой'},
        {id: 1, name: 'СТВ', price: 10, driver: 'Коля', phone: 10, carType: 'Пикап Повышеной проходимости'},
        {id: 2, name: 'КБР', price: 20, driver: 'Вася', phone: 10, carType: 'Микроавтобус'},
        {id: 3, name: 'ЦДКП', price: 3, driver: 'Коля', phone: +79098087060, carType: 'Легковой'},
    ];

    return (
        <div className='content'>
            <h1>Расписание Автомобилей</h1>

            <div className={styles.wrapper}>
                {columnName.map( el =>
                    <div className={styles.weekdays} >{el}</div>
                )}
            </div>

            {food.map( ( item, key ) =>
                    <Row key={key} 
                    id={item.id}
                    name={item.name} 
                    price={item.price} 
                    user={{
                        name: item.driver, 
                        number: item.phone }}
                    carType={item.carType}
                    />
            )}

        </div>
    );
}

