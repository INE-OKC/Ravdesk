import React from 'react';
import { Link } from 'react-router-dom';
import proj from './proj.module.css';
import notify from '../images/notification.png';
import Logo from '../images/Logo.png';
import profile from '../images/profile-small.png';
import users from '../images/users.png';

function getRandomColor(colors) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

const Project = () => {
    const colorSet = ['#519AF5', '#AA84F4', '#62FA96', '#FF676C'];

    return(
        <>
            <div className={proj.fof}>
                <header>
                    <div className={`${proj.container} ${proj.d_flex}`}>
                        <h1 className={proj.h1}>Projects</h1>
                        <div className={`${proj.sth} ${proj.d_flex}`}>
                            <input type="text" placeholder="Search" />
                            <div className={proj.img}><img src={notify} alt="Notifications" /></div>
                            <div className={proj.img}><img src={profile} alt="Small Profile" /></div>
                        </div>
                    </div>
                </header>
                <section>
                    <div className={proj.container}>
                        <div className={proj.gr}>
                            <div className={proj.box}>
                                <div className={proj.out}>
                                    <h3>Lorem ipsum dolor</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <Link to ="../projects/projects.html">
                                    {Array.from({ length: 1 }, (_, index) => (
                                        <div key={index} className={proj.in} style={{ backgroundColor: getRandomColor(colorSet) }}>
                                            <div className={proj.left}>
                                                <div className={proj.img}><img src={users} alt="Users" /></div>
                                                <p id="number">30</p>
                                            </div>
                                            <b>Invest</b>
                                        </div>
                                    ))}
                                </Link>
                            </div>
                            <div className={proj.box}>
                                <div className={proj.out}>
                                    <h3>Lorem ipsum dolor</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <Link to ="../projects/projects.html">
                                    {Array.from({ length: 1 }, (_, index) => (
                                        <div key={index} className={proj.in} style={{ backgroundColor: getRandomColor(colorSet) }}>
                                            <div className={proj.left}>
                                                <div className={proj.img}><img src={users} alt="Users" /></div>
                                                <p id="number">30</p>
                                            </div>
                                            <b>Invest</b>
                                        </div>
                                    ))}
                                </Link>
                            </div>
                            <div className={proj.box}>
                                <div className={proj.out}>
                                    <h3>Lorem ipsum dolor</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <Link to ="../projects/projects.html">
                                    {Array.from({ length: 1 }, (_, index) => (
                                        <div key={index} className={proj.in} style={{ backgroundColor: getRandomColor(colorSet) }}>
                                            <div className={proj.left}>
                                                <div className={proj.img}><img src={users} alt="Users" /></div>
                                                <p id="number">30</p>
                                            </div>
                                            <b>Invest</b>
                                        </div>
                                    ))}
                                </Link>
                            </div>
                            <div className={proj.box}>
                                <div className={proj.out}>
                                    <h3>Lorem ipsum dolor</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <Link to ="../projects/projects.html">
                                    {Array.from({ length: 1 }, (_, index) => (
                                        <div key={index} className={proj.in} style={{ backgroundColor: getRandomColor(colorSet) }}>
                                            <div className={proj.left}>
                                                <div className={proj.img}><img src={users} alt="Users" /></div>
                                                <p id="number">30</p>
                                            </div>
                                            <b>Invest</b>
                                        </div>
                                    ))}
                                </Link>
                            </div>
                            <div className={proj.box}>
                                <div className={proj.out}>
                                    <h3>Lorem ipsum dolor</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <Link to ="../projects/projects.html">
                                    {Array.from({ length: 1 }, (_, index) => (
                                        <div key={index} className={proj.in} style={{ backgroundColor: getRandomColor(colorSet) }}>
                                            <div className={proj.left}>
                                                <div className={proj.img}><img src={users} alt="Users" /></div>
                                                <p id="number">30</p>
                                            </div>
                                            <b>Invest</b>
                                        </div>
                                    ))}
                                </Link>
                            </div>
                            <div className={proj.box}>
                                <div className={proj.out}>
                                    <h3>Lorem ipsum dolor</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <Link to ="../projects/projects.html">
                                    {Array.from({ length: 1 }, (_, index) => (
                                        <div key={index} className={proj.in} style={{ backgroundColor: getRandomColor(colorSet) }}>
                                            <div className={proj.left}>
                                                <div className={proj.img}><img src={users} alt="Users" /></div>
                                                <p id="number">30</p>
                                            </div>
                                            <b>Invest</b>
                                        </div>
                                    ))}
                                </Link>
                            </div>
                            <div className={proj.box}>
                                <div className={proj.out}>
                                    <h3>Lorem ipsum dolor</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <Link to ="../projects/projects.html">
                                    {Array.from({ length: 1 }, (_, index) => (
                                        <div key={index} className={proj.in} style={{ backgroundColor: getRandomColor(colorSet) }}>
                                            <div className={proj.left}>
                                                <div className={proj.img}><img src={users} alt="Users" /></div>
                                                <p id="number">30</p>
                                            </div>
                                            <b>Invest</b>
                                        </div>
                                    ))}
                                </Link>
                            </div>
                            <div className={proj.box}>
                                <div className={proj.out}>
                                    <h3>Lorem ipsum dolor</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <Link to ="../projects/projects.html">
                                    {Array.from({ length: 1 }, (_, index) => (
                                        <div key={index} className={proj.in} style={{ backgroundColor: getRandomColor(colorSet) }}>
                                            <div className={proj.left}>
                                                <div className={proj.img}><img src={users} alt="Users" /></div>
                                                <p id="number">30</p>
                                            </div>
                                            <b>Invest</b>
                                        </div>
                                    ))}
                                </Link>
                            </div>
                            <div className={proj.box}>
                                <div className={proj.out}>
                                    <h3>Lorem ipsum dolor</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <Link to ="../projects/projects.html">
                                    {Array.from({ length: 1 }, (_, index) => (
                                        <div key={index} className={proj.in} style={{ backgroundColor: getRandomColor(colorSet) }}>
                                            <div className={proj.left}>
                                                <div className={proj.img}><img src={users} alt="Users" /></div>
                                                <p id="number">30</p>
                                            </div>
                                            <b>Invest</b>
                                        </div>
                                    ))}
                                </Link>
                            </div>
                            <div className={proj.box}>
                                <div className={proj.out}>
                                    <h3>Lorem ipsum dolor</h3>
                                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                                <Link to ="../projects/projects.html">
                                    {Array.from({ length: 1 }, (_, index) => (
                                        <div key={index} className={proj.in} style={{ backgroundColor: getRandomColor(colorSet) }}>
                                            <div className={proj.left}>
                                                <div className={proj.img}><img src={users} alt="Users" /></div>
                                                <p id="number">30</p>
                                            </div>
                                            <b>Invest</b>
                                        </div>
                                    ))}
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className={proj.resp}>
                <div className={proj.img}><img src={ Logo } alt="Logo" /></div>
                <h2>Mobile View Coming Soon</h2>
            </div>
        </>
    )
}

export default Project;