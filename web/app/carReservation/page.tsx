'use client'
import React, { ReactNode } from 'react';
import styles from './Table.module.css';
import Row from './row'

export default function Home() {

    const food = [
        {id: 1, name: 'cheese', price: 10, driver: 'Коля', phone: 10, carType: 'Пикап Повышеной проходимости'},
        {id: 2, name: 'milk', price: 20, driver: 'Вася', phone: 10, carType: 'Микроавтобус'},
        {id: 3, name: 'bread', price: 30, driver: 'Коля', phone: +79098087060, carType: 'Легковой'},
        {id: 1, name: 'cheese', price: 10, driver: 'Коля', phone: 10, carType: 'Пикап Повышеной проходимости'},
        {id: 2, name: 'milk', price: 20, driver: 'Вася', phone: 10, carType: 'Микроавтобус'},
        {id: 3, name: 'bread', price: 30, driver: 'Коля', phone: +79098087060, carType: 'Легковой'},
        {id: 1, name: 'cheese', price: 10, driver: 'Коля', phone: 10, carType: 'Пикап Повышеной проходимости'},
        {id: 2, name: 'milk', price: 20, driver: 'Вася', phone: 10, carType: 'Микроавтобус'},
        {id: 3, name: 'bread', price: 30, driver: 'Коля', phone: +79098087060, carType: 'Легковой'},
        {id: 1, name: 'cheese', price: 10, driver: 'Коля', phone: 10, carType: 'Пикап Повышеной проходимости'},
        {id: 2, name: 'milk', price: 20, driver: 'Вася', phone: 10, carType: 'Микроавтобус'},
        {id: 3, name: 'bread', price: 30, driver: 'Коля', phone: +79098087060, carType: 'Легковой'},
        {id: 1, name: 'cheese', price: 10, driver: 'Коля', phone: 10, carType: 'Пикап Повышеной проходимости'},
        {id: 2, name: 'milk', price: 20, driver: 'Вася', phone: 10, carType: 'Микроавтобус'},
        {id: 3, name: 'bread', price: 30, driver: 'Коля', phone: +79098087060, carType: 'Легковой'},
    ];

    return (
        <div style={{width: "100%"}}>
            <div className={styles.content}>
                <h1>Расписание Автомобилей</h1>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Название</th>
                            <th>Стоимость</th>
                            <th>Пользователь</th>
                            <th>Автомобилестой</th>
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
        </div>
    );
}

