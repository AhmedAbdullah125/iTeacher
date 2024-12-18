'use client'
import harts from '/public/harts.svg'
import tringStar from '/public/tringStar.svg'
import dots from '/public/dots.svg'
import send from '/public/send.png'
import car from '/public/car.svg'
import lamb from '/public/lamb.svg'
import tallDots from '/public/tallDots.svg'
import cloud from '/public/cloud.svg'
import arrowDown from '/public/arrowDown.png'
import logo from '/public/logoMini.png'
import NumberTicker from '../ui/number-ticker';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';


export default function Rest() {
    let relatives = [
        { id: 1, text: "First Level 1" },
        { id: 2, text: "First Level 2" },
        { id: 3, text: "First Level 3" },
        { id: 4, text: "First Level 4" },
        { id: 5, text: "First Level 5" },
        { id: 6, text: "First Level 9" },
    ]
    return (
        <div className="rest">
            <h2>Conversation <span>AI Solutions</span> Infinite Possibilities 💪🏻</h2>
            <div className="rest-cont">
                <div className="counter-cont">
                    <div className="counter-r contter">
                        <div className="bordered-counter">
                            <Image src={harts} alt="iTeacher" />
                            <div className="counter">
                                <NumberTicker value={200} />
                                <p>Favorite Questions</p>
                            </div>
                        </div>
                    </div>
                    <div className="counter-b contter">
                        <div className="bordered-counter">
                            <Image src={lamb} alt="iTeacher" />
                            <div className="counter">
                                <NumberTicker value={7985} />
                                <p>Favorite Questions</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="saying-hey">
                    <div className="hey">
                        <div className="text-cont">
                            Hey, Shams !
                            <div className="arrow-after">
                            </div>
                        </div>
                    </div>
                    <div className="logo-img">
                        <Image src={logo} alt="iTeacher" />
                    </div>
                    <p className="hey-p">Start A Conversation With Our <span>AI Chatbot</span> Today !</p>
                </div>
                <div className="help-steps">
                    <h3>What Can I help with?</h3>
                    <div className="trings-cont">

                        {
                            relatives.map((item, index) =>
                                <div
                                    className="relative" key={item.id}>
                                    <motion.div
                                        initial={{ opacity: 0, y: -100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            type: 'spring',
                                            bounce: 0.2,
                                            duration: index * .1,
                                        }}
                                        viewport={{ once: true }}
                                        className="dotted-star">
                                        <Image className='star' src={tringStar} alt="iTeacher" />
                                        <Image className='dots' src={dots} alt="iTeacher" />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, x: -100 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            type: 'spring',
                                            bounce: 0.2,
                                            duration: index * .1,
                                        }}
                                        viewport={{ once: true }}
                                        className="tring">
                                        <h5>{item.text}</h5>
                                        <Image src={arrowDown} alt="iTeacher" />
                                    </motion.div>
                                </div>
                            )
                        }

                        <Image className='tall-dotsmm' src={tallDots} alt="iTeacher" />
                        <motion.div
                            initial={{ insetInlineStart: 0 }}
                            whileInView={{ insetInlineStart: "100%" }}
                            transition={{
                                type: 'linear',
                                bounce: 0,
                                duration: 5,
                            }}
                            className="car-cont">
                            <Image src={car} alt="iTeacher" />
                        </motion.div>
                        <motion.div
                            initial={{opacity: 0, insetInlineStart: 0 }}
                            whileInView={{opacity: 1, insetInlineStart: "66%" }}
                            transition={{
                                type: 'linear',
                                bounce: 0,
                                duration: 5,
                                delay: 5
                            }}
                            className="car-cont-2">
                            <Image src={car} alt="iTeacher" />
                        </motion.div>
                    </div>
                    <form className="form-cont">
                        <input type="text" placeholder='Write your question here...'></input>
                        <div className="btnss">
                            <label for="file-upload" className="custom-file-upload">
                            </label>
                            <input id="file-upload" type="file" />
                            <label for="submit" className="custom-submit">
                                <span>Send</span> <Image src={send} alt='iTeacher'></Image>
                            </label>
                            <input type="submit" className='submit' id="submit"></input>
                        </div>
                    </form>
                    <Image src={cloud} alt='iTeacher' className='cloud-img'></Image>
                </div>
            </div>
        </div >
    );
}