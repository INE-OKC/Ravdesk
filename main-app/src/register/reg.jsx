import React from 'react';
import { Link } from 'react-router-dom';
import reg from './reg.module.css';
import Logo from '../images/Logo.png';

const Register = () => {
    return(
        <>
            <div className={reg.fof}>
                <header>
                    <div className={reg.container}>
                        <div className={reg.img}>
                            <Link to="/">
                                <img src={Logo} alt="Logo"/>
                            </Link>
                        </div>
                    </div>
                </header>
                <section>
                    <div className={reg.container}>
                        <h1 className={reg.h11}>REGISTER YOURSELF BEFORE JOINING US IN THIS JOURNEY</h1>
                        <div className={`${reg.box} ${reg.d_flex}`}>
                            <form action="" className={reg.forrrm}>
                                <div className={`${reg.one} ${reg.d_flex}`}>
                                    <input type="text" placeholder="First name" className={reg.imp} />
                                    <input type="text" placeholder="Last name" className={reg.imp} />
                                </div>
                                <div className={reg.one}>
                                    <input type="text" placeholder="+1" className={reg.inp} />
                                    <input type="tel" placeholder="Phone Number" />
                                    <input type="text" placeholder="Gender" />
                                </div>
                                <input type="text" placeholder="Address" className={reg.add} />
                                <div className={`${reg.one} ${reg.d_flex}`}>
                                    <input type="text" placeholder="Country" className={reg.imp} />
                                    <input type="number" placeholder="Zip Code" className={reg.imp} />
                                </div>
                                <input type="email" placeholder="Email" className={reg.ema} />
                                <input type="password" placeholder="Password" className={reg.ema} />
                                <input type="password" placeholder="Confirm Password" className={reg.ema} />
                                <div className={reg.one}>
                                    <label className={reg.check}>I agree to all the terms and conditions{'\u002A'}
                                        <input type="checkbox" />
                                        <span className={reg.checkmark}></span>
                                    </label>
                                </div>
                                <button type="submit">Create my Account</button>
                            </form>
                            <div className={reg.side}>
                                <div className={reg.img1}><img src={Logo} alt="Logo" /></div>
                                <h2>Join us today and start your journey with a single click.</h2>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={reg.resp}>
                <div className={reg.img}><img src={Logo} alt="Logo" /></div>
                <h2>Mobile View Coming Soon</h2>
            </div>
        </>
    )
}

export default Register