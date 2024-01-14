'use client'
import React, { ReactNode } from 'react';
import styles from './CarReserv.module.css';
import Row from './row'

export default function Home() {

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
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Департамент</th>
                        <th>Требуемый<br/>Автомобиль</th>
                        <th>Водитель</th>
                        <th>Автомобиль</th>
                        <th>Статус</th>
                        <th>Время начала<br/>Время окончания</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {food.map(function( item, key) { return (
                        <Row key={key} 
                            id={item.id}
                            name={item.name} 
                            price={item.price} 
                            user={{
                                name: item.driver, 
                                number: item.phone }}
                            carType={item.carType}
                        />
                    )})}
                </tbody>
            </table>
        </div>
    );
}

