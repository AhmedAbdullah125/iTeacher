'use client';
import React, { useEffect } from 'react';
import img1 from '../../../src/images/vectors/vector-2.svg';
import img2 from '../../../src/images/vectors/vector-3.png';
import img3 from '../../../src/images/vectors/btn-icon.svg';
import img4 from '../../../src/images/vectors/4.svg';
import img5 from '../../../src/images/vectors/5.svg';
import img6 from '../../../src/images/vectors/6.svg';
import img7 from '../../../src/images/vectors/7.svg';
import img8 from '../../../src/images/hero.jpeg';
import img9 from '../../../src/images/teacher-logo.png';
import img10 from '../../../src/images/vectors/8.svg';

import Image from 'next/image';
import Link from 'next/link';
export default function login() {
    // useEffect(() => {
    //     document.querySelector('.bodyCont').classList.add('sign-pages');
    //     document.querySelector('.bodyCont').classList.remove('bodyCont');
    //     document.querySelector('.bodyCont').classList.toggle('bodyCont');
        
    // }, []);
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
                <span>Login 🚀</span>
              </div>
              <div className="sign-form-cont">
                <form action="" className="login-form">
                  <div className="form-header">
                    <h3>
                      Enter Your Email and Password to access for your account
                    </h3>
                    <figure>
                      <Image src={img10} alt="icon" />
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
                  <div className="form-group">
                    <label className="form-label">Password:</label>
                    <div className="form-input-relative">
                      <label className="password-show">
                        <input type="checkbox" onchange="showPass(this)" />
                        <i className="fa-light fa-eye-slash"></i>
                      </label>
                      <input
                        type="password"
                        className="form-input"
                        placeholder="Enter Your Password"
                      />
                    </div>
                  </div>
                  <Link href="/forget" className="forget-password">
                    Forget Password?
                  </Link>
                  <div className="form-btn-cont">
                    <Image
                      src={img3}
                      alt="icon"
                      className="submit-vector"
                    />
                    <button className="submit-btn" type="submit">Login</button>
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