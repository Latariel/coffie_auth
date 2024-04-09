import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import React, { useState } from 'react';
import './main.css'
import logo from './лого1.png'

import {Modal} from "../Modal/Modal";
import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, TextRun } from 'docx';


export const Private = () => {


    const handleSignOut = () => {
        signOut(auth)
            .then(() => console.log("Sign Out"))
            .catch((error) => console.log(error));
    };
    const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
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
        americano: 'Американо',
        capuchino: 'Капучино',
        espresso: 'Эспрессо',
        flet: 'Флэт Уайт',
        hotChocolate: 'Горячий шоколад',
        cacao: 'Какао',
        milkShake: 'Молочный Коктейль',
        tea1: 'Черный чай',
        tea2: 'Зеленый чай',
        nap: 'Наполеон',
        black: 'Черный Лес',
        kartoshka: 'Пироженое "Картошка"',
        vaf: 'Вафельные трубочки',
        med: 'Медовик',
        cookie: 'Печенье',
    };


    const addItem = (item, price) => {
        if (totals[item] < 10) {
            const updatedTotals = {...totals};
            updatedTotals[item]++;
            setTotals(updatedTotals);

            setTotal(total + price);

            if (!selectedItems.includes(item)) {
                setSelectedItems([...selectedItems, item]);
            }
        } else {
            alert('Достигнуто максимальное количество позиций (10).');
        }
    };

    const removeItem = (item, price) => {
        if (totals[item] > 0) {
            const updatedTotals = {...totals};
            updatedTotals[item]--;
            setTotals(updatedTotals);

            setTotal(total - price);
            setSelectedItems(selectedItems.filter((selectedItem) => selectedItem !== item)); // Удалить выбранную позицию
        }
    };

    // const [printing, setPrinting] = useState(false);
    //
    // // Функция для обработки печати
    // function handlePrint() {
    //     // Скрыть все элементы, кроме модального окна
    //     const originalDisplay = document.body.style.display;
    //     document.body.style.display = 'none';
    //
    //     // Печать содержимого модального окна
    //     window.print();
    //
    //     // Восстановить отображение элементов
    //     document.body.style.display = originalDisplay;
    //
    //     // Установить состояние печати в true
    //     setPrinting(true);
    // }


    // function handlePrint() {
    //     // Скрыть все элементы, кроме модального окна
    //     const originalDisplay = document.body.style.display;
    //     document.body.style.display = 'none';
    //
    //     // Печать содержимого модального окна
    //     window.print();
    //
    //     // Восстановить отображение элементов
    //     document.body.style.display = originalDisplay;
    // }

   // function handleExportToWord async () {
   //  const doc = new Document({
   //      sections: [{
   //          properties: {},
   //          children: [
   //              new Paragraph({
   //                  children: [
   //                      new TextRun("Чек:"),
   //                  ],
   //              }),
   //              // Добавьте остальные элементы чека (ваш код)
   //          ],
   //      }],
   //  });


    //     const buffer = await Packer.toBuffer(doc);
    //     const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
    //     const link = document.createElement('a');
    //     link.href = window.URL.createObjectURL(blob);
    //     link.download = 'my-check.docx';
    //     link.click();
    // };


    // const [modalInfoIsOpen, setModalInfoOpen] = useState(false);
    // const generateAndDownloadReceipt = () => {
    //     // Создание контента для файла Word
    //     const content = `
    //         <h2>Чек:</h2>
    //         <ul>
    //             ${selectedItems.map((selectedItem, index) => (
    //         `<li>${menuItems[selectedItem]} ${totals[selectedItem]}</li>`
    //     )).join('')}
    //             <p>Итого: <span class="final" id="total">${total}</span> рублей</p>
    //         </ul>
    //     `;
    //
    //     // Создание Blob
    //     const blob = new Blob([content], {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
    //
    //     // Сохранение файла
    //     saveAs(blob, 'receipt.docx');
    // }


    const generateAndDownloadReceipt = () => {
        // Генерация текста для сохранения
        const receiptText = `
            Чек:
            ${selectedItems.map((selectedItem, index) => (
            `${menuItems[selectedItem]} ${totals[selectedItem]}`
        )).join('\n')}
            Итого: ${total} рублей
        `;

        // Создание Blob
        const blob = new Blob([receiptText], { type: 'text/plain' });

        // Сохранение файла
        saveAs(blob, 'receipt.txt');
    };


    return (
        <section>
            <div className='top'>
                <img src={logo} className='img1' alt='logo'/>
                <button onClick={handleSignOut} className='btn3'>Sign Out</button>
            </div>
            <div className='top2'>
                <div className='left-part'>
                    <table className="drinks">
                        <caption>Напитки</caption>

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

<div className='btnMain'>
    <button className='btn4'
            onClick={() => setModalInfoOpen(true)}
    >
        Наличные</button>
    {/*<button className='btn5'>Безналичные</button>*/}
    <button
        className="btn5"
        onClick={() => setModalInfoOpen(true)}
    >
        Безналичные
    </button>
    <Modal
        isOpen={modalInfoIsOpen}
        onClose={() => setModalInfoOpen(false)}
    >
        <h2>Чек:</h2>
        <ul>
            {selectedItems.map((selectedItem, index) => (
                <li key={index}>{menuItems[selectedItem]} {totals[selectedItem]}</li>
            ))}
            <p > Итого: <span className="final" id="total" > {total}</span> рублей</p>
            <button onClick={generateAndDownloadReceipt}>Скачать чек</button>
        </ul>
    </Modal>
</div>
            <div className='bottom'>

                <p className="total_1"> Итого: <span className="final" id="total" > {total}</span> </p>

            </div>
        </section>
    );
};
