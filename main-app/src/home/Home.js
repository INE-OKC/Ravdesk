import React from 'react';
import { Link } from "react-router-dom";
import styles from './index.module.css';
import Logo from '../images/Logo.png';
import Play from '../images/play.png';

const Home = () => {
    return (
        <>
            <div className={styles.fof}>
                <header>
                    <div className={`${styles.container} ${styles.d_flex}`}>
                        <div className={`${styles.img} ${styles.w_30} ${styles.nav}`}><img src={Logo} alt="Logo"/></div>
                        <nav className={`${styles.align} ${styles.w_50}`}>
                            <ul>
                                <li><Link to="/login">Login</Link></li>
                                <li><Link to="/register">Register</Link></li>
                                <li><Link to="/projects">Projects</Link></li>
                                <li><Link to="/">About</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <section>
                    <div className={styles.one}>
                        <div className={`${styles.container} ${styles.d_flex} ${styles.dir}`}>
                            <h1 className={styles.words}>Name of the Project</h1>
                            <div className={styles.box}>
                                <div className={styles.vid}>
                                    <div className={styles.img1}><img src={Play} alt="Play button"/></div>
                                </div>
                                <div className={styles.sth}>
                                    <h4>Video of the Project</h4>
                                    <h5>Description</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet totam quasi numquam iusto laboriosam eius dolorum praesentium beatae excepturi vero sapiente vel, ut officiis consequuntur adipisci, ipsa distinctio omnis in. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem repellat vel deleniti ipsum eveniet voluptate iusto, voluptatum atque impedit libero, itaque repellendus fugit nostrum. Vel quidem dicta maxime adipisci est.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.two}>
                        <div className={styles.container}>
                            <div className={styles.live}>
                                Live Link of the Project:
                            </div>
                            <div className={styles.sth1}>
                                <div className={styles.top}>
                                    <div className={styles.rgb}>10000$</div>
                                    <div className={styles.rgb}>50%</div>
                                    <div className={styles.rgb}>~ June, 2023</div>
                                </div>
                                <div className={styles.bot}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptates veritatis, quisquam vero dignissimos commodi maxime exercitationem corporis, modi quod suscipit impedit! Amet perferendis in, eius quos ratione totam minima? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia id vel sit sapiente explicabo rerum ipsa deleniti ipsum quod pariatur beatae veritatis ab reprehenderit odio perspiciatis autem, excepturi, deserunt accusamus!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.faq}>
                        <div className={styles.container}>
                            <div className={styles.wording}>FAQs</div>
                            <div className={styles.boxes}>
                                <div className={styles.box1}>
                                    <h4><span>?</span> What is Duis aute irure ?</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic aliquid unde quo nam praesentium quisquam molestias delectus, obcaecati maiores sint ut quos earum totam illo recusandae, doloribus eum! Unde, voluptatem?</p>
                                    <Link to="#">Read more ➜</Link>
                                </div>
                                <div className={styles.box1}>
                                    <h4><span>?</span> What is Duis aute irure ?</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic aliquid unde quo nam praesentium quisquam molestias delectus, obcaecati maiores sint ut quos earum totam illo recusandae, doloribus eum! Unde, voluptatem?</p>
                                    <Link to="#">Read more ➜</Link>
                                </div>
                                <div className={styles.box1}>
                                    <h4><span>?</span> What is Duis aute irure ?</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic aliquid unde quo nam praesentium quisquam molestias delectus, obcaecati maiores sint ut quos earum totam illo recusandae, doloribus eum! Unde, voluptatem?</p>
                                    <Link to="#">Read more ➜</Link>
                                </div>
                                <div className={styles.box1}>
                                    <h4><span>?</span> What is Duis aute irure ?</h4>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic aliquid unde quo nam praesentium quisquam molestias delectus, obcaecati maiores sint ut quos earum totam illo recusandae, doloribus eum! Unde, voluptatem?</p>
                                    <Link to="#">Read more ➜</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>
                    <div className={styles.container}>
                        <h1>Are you excited on the project ? <Link to="#">Fund the project</Link></h1>
                    </div>
                </footer>
            </div>
            <div className={styles.resp}>
                <div className={styles.img}><img src={Logo} alt="Logo"/></div>
                <h2>Mobile View Coming Soon</h2>
            </div>
        </>
    );
  };
  
export default Home;