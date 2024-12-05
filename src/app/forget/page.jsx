
import Image from 'next/image';
import React from 'react';
import Link from 'next/link'
import img1 from '../../../src/images/vectors/vector-2.svg';
import img2 from '../../../src/images/vectors/vector-3.png';
import img3 from '../../../src/images/vectors/btn-icon.svg';
import img4 from '../../../src/images/vectors/4.svg';
import img5 from '../../../src/images/vectors/5.svg';
import img6 from '../../../src/images/vectors/6.svg';
import img7 from '../../../src/images/vectors/7.svg';
import img8 from '../../../src/images/hero.jpeg';
import img9 from '../../../src/images/teacher-logo.png';
import img10 from '../../../src/images/vectors/arrow.svg';
import img11 from '../../../src/images/vectors/08.svg';

export default function SuggestedSubjects() {
    return (
        <section className="sign-section">
            <div className="container m-auto">
                <div className="sign-cont">
                    <Image
                        src={img1}
                        alt="vector"
                        className="rocket-img"
                    />
                    <Image
                        src={img2}
                        alt="vector"
                        className="star-img"
                    />
                    <div className="sign-hero">
                        <div className="sign-hero-img">
                            <div className="hero-img">
                                <Image src={img8} alt="hero" />
                            </div>
                            <Image
                                src={img9}
                                alt="logo"
                                className="teacher-logo"
                            />
                        </div>
                    </div>
                    <div className="sign-form">
                        <div className="sign-form-head">
                            <Link href="login.html" className="form-ex" ><Image src={img10} alt="back" /></Link>
                            <span>Forget Password ? 💭</span>
                        </div>
                        <div className="sign-form-cont">
                            <form action="" className="login-form">
                                <div className="form-header">
                                    <h3>Enter Your Email to Reset your password</h3>
                                    <figure>
                                        <Image src={img11} alt="icon" />
                                    </figure>
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-input"
                                        placeholder="Example: Johnsmith123@gmail.com"
                                    />
                                </div>
                                <div className="form-btn-cont">
                                    <Image
                                        src={img3}
                                        alt="icon"
                                        className="submit-vector"
                                    />
                                    <button className="submit-btn" type="submit">Send</button>
                                </div>
                            </form>
                            <Image
                                src={img4}
                                alt="icon"
                                className="sign-vector sign-v1"
                            />
                            <Image
                                src={img5}
                                alt="icon"
                                className="sign-vector sign-v2"
                            />
                            <Image
                                src={img6}
                                alt="icon"
                                className="sign-vector sign-v3"
                            />
                            <Image
                                src={img7}
                                alt="icon"
                                className="sign-vector sign-v4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}