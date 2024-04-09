/* eslint-disable react/prop-types */
import { useState } from "react";
import { Navigate } from "react-router-dom";
import './home.css'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { auth } from "../firebase";
import logo from './лого1.png'

export const Home = ({ user }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUpActive, setIsSignUpActive] = useState(true);
    const handleMethodChange = () => {
        setIsSignUpActive(!isSignUpActive);
    };

    const handleSignUp = () => {
        if (!email || !password) return;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const handleSignIn = () => {
        if (!email || !password) return;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    if (user) {
        return <Navigate to="/private"></Navigate>;
    }
    return (
        <section>
<img src={logo} className='img1' alt='logo'/>
            <form className='regForm'>
                {isSignUpActive && <legend className='txt2'>Регистрация нового сотрудника</legend>}
                {!isSignUpActive && <legend className='txt2'>Вход в аккаунт</legend>}

                <fieldset>
                    <ul>
                        <li className='email'>
                            <label htmlFor="email" className={email ? 'placeholder filled' : 'placeholder'}>Email</label>
                            <input type="text" id="email" onChange={handleEmailChange} />
                        </li>
                        <li className='email'>
                            <label htmlFor="password" className={email ? 'placeholder filled' : 'placeholder'}>Password</label>
                            <input
                                type="password"
                                id="password"
                                onChange={handlePasswordChange}
                            />
                        </li>
                    </ul>

                    {isSignUpActive && (
                        <button type="button" onClick={handleSignUp} className='btn1'>
                           Создать аккаунт
                        </button>
                    )}
                    {!isSignUpActive && (
                        <button type="button" onClick={handleSignIn} className='btn1'>
                            Войти в аккаунт
                        </button>
                    )}
                </fieldset>
                {isSignUpActive && <button className='btn2' onClick={handleMethodChange}>Уже есть аккаунт? Войти</button>}
                {!isSignUpActive && (
                    <button className='btn2' onClick={handleMethodChange}>Зарегестрироваться</button>
                )}
            </form>
        </section>
    );
};
