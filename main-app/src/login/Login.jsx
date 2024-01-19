import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Logins from './login.module.css';
import Logo from '../images/Logo.png';
import Google from '../images/google.png';
import Add from '../images/add.png';

const Login = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/register')
    } 

    return (
        <>
            <div className={Logins.fof}>
                <header>
                    <div className={Logins.container}>
                        <div className={Logins.img}>
                            <Link to="/">
                                <img src={Logo} alt="Logo"/>
                            </Link>
                        </div>
                    </div>
                </header>
                <section>
                    <div className={Logins.container}>
                        <div className={`${Logins.up} ${Logins.d_flex}`}>
                            <h2>JOIN YOUR HANDS WITH <span>RavDesk</span> </h2>
                            <p>Login To Your Account</p>
                        </div>
                        <div className={`${Logins.down} ${Logins.d_flex}`}>
                            <div className={Logins.box}>
                                <form action="" className={`${Logins.d_flex} ${Logins.forrm}`}>
                                    <input type="email" placeholder="Email" required />
                                    <input type="password" placeholder="Password" required />
                                    <button type="submit">Login To Your Account </button>
                                </form>
                                <Link to="#">Forgot Password?</Link>
                            </div>
                            <div className={Logins.boxx}>/</div>
                            <div className={`${Logins.box} ${Logins.d_flex}`}>
                                <button className={`${Logins.btn} ${Logins.d_flex}`}>
                                    <div className={Logins.img}><img src={Google} alt="Google logo" /></div>
                                    <span>Sign in with Google</span>
                                </button>
                                <button className={`${Logins.btn} ${Logins.d_flex}`} id="register" onClick={handleButtonClick}>
                                    <div className={Logins.img}><img src={Add} alt="Add logo" /></div>
                                    <span>New Registration</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={Logins.resp}>
                <div className={Logins.img}><img src={Logo} alt="Logo" /></div>
                <h2>Mobile View Coming Soon</h2>
            </div>
        </>
    );
}

export default Login