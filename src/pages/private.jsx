import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import React, { useState } from 'react';
import './main.css'
// import {Modal} from 'src/modal'
import Modal from "../modal/modal";
import logo from './лого1.png'

export const Private = () => {
    const handleSignOut = () => {
        signOut(auth)
            .then(() => console.log("Sign Out"))
            .catch((error) => console.log(error));
    };

    const [total, setTotal] = useState(0);
    const [totals, setTotals] = useState({

        espresso: 0,
        americano: 0,
        capuchino: 0,
        flet: 0,
        hotChocolate: 0,
        cacao: 0,
        milkShake: 0,
        tea1: 0,
        tea2: 0,
        nap: 0,
        black: 0,
        kartoshka: 0,
        vaf: 0,
        med: 0,
        cookie: 0,
    });
    const [selectedItems, setSelectedItems] = useState([]);



    const menuItems = {
        americano:  'Американо',
        capuchino:  'Капучино',
        espresso: 'Эспрессо',
        flet: 'Флэт Уайт',
        hotChocolate: 'Горячий шоколад',
        cacao: 'Какао',
        milkShake: 'Молочный Коктейль',
        tea1:'Черный чай',
        tea2: 'Зеленый чай',
        nap: 'Наполеон',
        black: 'Черный Лес',
        kartoshka: 'Пироженое "Картошка"',
        vaf: 'Вафельные трубочки',
        med: 'Медовик',
        cookie: 'Печенье',
        // Добавьте другие напитки здесь
    };


    const addItem = (item, price) => {
        if (totals[item] < 10) {
            const updatedTotals = { ...totals };
            updatedTotals[item]++;
            setTotals(updatedTotals);

            setTotal(total + price);

            if (!selectedItems.includes(item)) {
                setSelectedItems([...selectedItems, item]); // Добавить выбранную позицию
            }
        } else {
            alert('Достигнуто максимальное количество позиций (10).');
        }
    };

    const removeItem = (item, price) => {
        if (totals[item] > 0) {
            const updatedTotals = { ...totals };
            updatedTotals[item]--;
            setTotals(updatedTotals);

            setTotal(total - price);
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item)); // Удалить выбранную позицию
        }
    };


    // const menuItems = {
    //     americano: { name: 'Американо', price: 120 },
    //     cappuccino: { name: 'Капучино', price: 150 },
    //     // Добавьте другие напитки здесь
    // };
    //
    // const addItem = (item) => {
    //     if (totals[item] < 10) {
    //         const updatedTotals = { ...totals };
    //         updatedTotals[item]++;
    //         setTotals(updatedTotals);
    //
    //         setTotal(total + menuItems[item].price);
    //
    //         if (!selectedItems.includes(item)) {
    //             setSelectedItems([...selectedItems, item]); // Добавить выбранную позицию
    //         }
    //     } else {
    //         alert('Достигнуто максимальное количество позиций (10).');
    //     }
    // };
    //
    // const removeItem = (item) => {
    //     if (totals[item] > 0) {
    //         const updatedTotals = { ...totals };
    //         updatedTotals[item]--;
    //         setTotals(updatedTotals);
    //
    //         setTotal(total - menuItems[item].price);
    //         setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item)); // Удалить выбранную позицию
    //     }
    // };


    return (
        <section>
            <div className='top'>
                <img src={logo} className='img1' alt='logo'/>
                <button onClick={handleSignOut} className='btn3'>Sign Out</button>
            </div>
            {/*<img src={logo} className='img1'/>*/}
            {/*<button onClick={handleSignOut}>Sign Out</button>*/}
            <div className='top2'>
                <div className='left-part'>
                    <table className="drinks">
                        <caption>Напитки</caption>

                        {/*{Object.keys(menuItems).map((item) => (*/}
                        {/*    // <tr className="ket" key={item}>*/}
                        {/*    //     <td className="border">Эспрессо 120 ₽</td>*/}
                        {/*    //     <td className="">*/}
                        {/*    //         <button onClick={() => removeItem('espresso', 120)}>—</button>*/}
                        {/*    //     </td>*/}
                        {/*    //     <td><span id="bbq">{totals.espresso}</span></td>*/}
                        {/*    //     <td className="border">*/}
                        {/*    //         <button onClick={() => addItem('espresso', 120)}>+</button>*/}
                        {/*    //     </td>*/}
                        {/*    // </tr>*/}



                        {/*    <tr key={item} className={item}>*/}
                        {/*        <td className="border">{menuItems[item]}</td>*/}
                        {/*        <td className="">*/}
                        {/*            <button onClick={() => removeItem(item, 120)}>—</button>*/}
                        {/*        </td>*/}
                        {/*        <td><span id={item}>{totals[item]}</span></td>*/}
                        {/*        <td className="border">*/}
                        {/*            <button onClick={() => addItem(item, 120)}>+</button>*/}
                        {/*        </td>*/}
                        {/*    </tr>*/}
                        {/*    //*/}
                        {/*    // <tr key={item} className={item}>*/}
                        {/*    //     <td className="border">{menuItems[item].name} {menuItems[item].price} ₽</td>*/}
                        {/*    //     <td className="">*/}
                        {/*    //         <button onClick={() => removeItem(item)}>—</button>*/}
                        {/*    //     </td>*/}
                        {/*    //     <td><span id={item}>{totals[item]}</span></td>*/}
                        {/*    //     <td className="border">*/}
                        {/*    //         <button onClick={() => addItem(item)}>+</button>*/}
                        {/*    //     </td>*/}
                        {/*    // </tr>*/}
                        {/*))}*/}

                        <tr className="ket">
                            <td className="border">Эспрессо 120 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('espresso', 120)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.espresso}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('espresso', 120)}>+</button>
                            </td>
                        </tr>
                        <tr className="ch">
                            <td className="border">Американо 120 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('americano', 120)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.americano}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('americano', 120)}>+</button>
                            </td>
                        </tr>
                        <tr className="bl">
                            <td className="border">Капучино 160 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('capuchino', 160)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.capuchino}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('capuchino', 160)}>+</button>
                            </td>
                        </tr>
                        <tr className="bbq">
                            <td className="border">Флэт-Уайт 180 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('flet', 180)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.flet}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('flet', 180)}>+</button>
                            </td>
                        </tr>
                        {/*<tr className="bbq">*/}
                        {/*    <td className="border">Горячий шоколад 180 ₽</td>*/}
                        {/*    <td className="">*/}
                        {/*        <button onClick={() => removeItem('ketchup', 20)}>—</button>*/}
                        {/*    </td>*/}
                        {/*    <td><span id="bbq">0</span></td>*/}
                        {/*    <td className="border">*/}
                        {/*        <button onClick={() => addItem('ketchup', 20)}>+</button>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}


                        <tr className="bbq">
                            <td className="border">Горячий шоколад 180 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('hotChocolate', 180)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.hotChocolate}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('hotChocolate', 180)}>+</button>
                            </td>
                        </tr>
                        <tr className="bbq">
                            <td className="border">Какао 160 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('cacao', 160)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.cacao}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('cacao', 160)}>+</button>
                            </td>
                        </tr>
                        <tr className="bbq">
                            <td className="border">Молочный котклейль 150 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('milkShake', 150)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.milkShake}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('milkShake', 150)}>+</button>
                            </td>
                        </tr>
                        <tr className="bbq">
                            <td className="border">Чай черный 150 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('tea1', 150)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.tea1}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('tea1', 150)}>+</button>
                            </td>
                        </tr>
                        <tr className="bbq">
                            <td className="border">Чай зеленый 150 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('tea2', 150)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.tea2}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('tea2', 150)}>+</button>
                            </td>
                        </tr>
                    </table>
                </div>








                <div className='right-part'>
                    <table className="deserts">
                        <caption>Десерты</caption>
                        <tr className="ket">
                            <td className="border">Наполеон 120₽</td>
                            <td className="">
                                <button onClick={() => removeItem('nap', 120)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.nap}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('nap', 120)}>+</button>
                            </td>
                        </tr>
                        <tr className="ch">
                            <td className="border"> Черный лес 130 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('black', 130)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.black}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('black', 130)}>+</button>
                            </td>
                        </tr>
                        <tr className="bl">
                            <td className="border">Пироженое "Картошка" 100 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('kartoshka', 100)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.kartoshka}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('kartoshka', 100)}>+</button>
                            </td>
                        </tr>
                        <tr className="bbq">
                            <td className="border">Вафельные трубочки 140 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('vaf', 140)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.vaf}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('vaf', 140)}>+</button>
                            </td>
                        </tr>
                        <tr className="bbq">
                            <td className="border">Медовик 180 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('med', 180)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.med}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('med', 180)}>+</button>
                            </td>
                        </tr>
                        <tr className="bbq">
                            <td className="border">Печенье 60 ₽</td>
                            <td className="">
                                <button onClick={() => removeItem('cookie', 60)}>—</button>
                            </td>
                            <td><span id="bbq">{totals.cookie}</span></td>
                            <td className="border">
                                <button onClick={() => addItem('cookie', 60)}>+</button>
                            </td>
                        </tr>

                    </table>
                </div>

            </div>


            {/*<div className='bottom'>*/}
            {/*    <p className="total_1"> Итого: <span className="final" id="total" > {total}</span> </p>*/}
            {/*</div>*/}
<div className='btnMain'>
    <button className='btn4' onClick={Modal}>Наличные</button>
    <button className='btn5'>Безналичные</button>
</div>
            <div className='bottom'>

                <p className="total_1"> Итого: <span className="final" id="total" > {total}</span> </p>

                <h2>Выбранные позиции:</h2>
                <ul>
                    {selectedItems.map((selectedItem, index) => (
                        <li key={index}>{menuItems[selectedItem]} {totals[selectedItem]}</li>
                    ))}
                </ul>
                {/*<Modal>*/}

                {/*</Modal>*/}
            </div>

            {/*<button className='btn4'>наличные</button>*/}
            {/*<button className='btn5'>базналичные</button>*/}
        </section>
    );
};
