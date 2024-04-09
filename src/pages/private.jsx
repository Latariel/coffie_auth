import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import './main.css'
import logo from './лого1.png'

export const Private = () => {
    const handleSignOut = () => {
        signOut(auth)
            .then(() => console.log("Sign Out"))
            .catch((error) => console.log(error));
    };
    return (
        <section>
            <div className='top'>
                <img src={logo} className='img1' alt='logo'/>
                <button onClick={handleSignOut} className='btn3'>Sign Out</button>
            </div>
            {/*<img src={logo} className='img1'/>*/}
            {/*<button onClick={handleSignOut}>Sign Out</button>*/}
        </section>
    );
};
