'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import teatcher from '/public/teacher.svg'
import starImg from '/public/star.svg'
import cloud from '/public/cloud2.svg'
import rocket from '/public/rocket.svg'
import paper from '/public/paper.svg'
import numBack from '/public/numBack.svg'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
export default function SideBar() {
    let width = screen.width;
    console.log(width);

    const [open, setOpen] = useState(true)
    return (
        <div className={`side-bar ${open ? 'side-bar-mini' : ''}`} >
            <div className="arrows" >
                <div className="toggle" onClick={() => setOpen(!open)}>
                    <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div className="add" >
                    <i className="fa-solid fa-plus" ></i>
                </div>
            </div>
            <div className="all-cont" id='all-cont'>
                <div className="teacher-img relative">
                    <Image src={teatcher} className='teacher-img'></Image>
                    <Image src={starImg} className="star-img absolute top-0 end-20 w-3 h-3 z-10"></Image>
                    <Image src={starImg} className="star-img absolute -bottom-3 end-0 w-5 h-5 z-10"></Image>
                    <Image src={starImg} className="star-img absolute -bottom-5 start-5 w-5 h-5 z-10"></Image>
                </div>
                <div className="discussions">
                    <h3>Discussions</h3>
                    <span>400</span>
                    <Image src={rocket} className="rocket-img"></Image>
                    <Image src={paper} className="paper-img"></Image>
                    <Image src={starImg} className="star-img absolute top-5 end-[40%] w-5 h-5 z-10"></Image>
                    <div className="w-2 h-2 bg-white/20 absolute top-4 start-8 rounded-full "></div>
                    <div className="w-5 h-5 bg-white/20 absolute top-4 start-12 rounded-full "></div>
                    <div className="w-2 h-2 bg-white/20 absolute top-[50%] end-[45%] rounded-full "></div>
                    <div className="w-1 h-1 bg-white/20 absolute bottom-8 start-[45%] rounded-full "></div>
                    <div className="w-4 h-4 bg-white/20 absolute bottom-4 start-[40%] rounded-full "></div>
                    <Image src={cloud} alt='iTeacher' className='cloud' />
                </div>
                <Accordion type="single" collapsible className="w-full accordion">
                    <AccordionItem value="item-1" className='accordion-item'>
                        <AccordionTrigger><div className="accordion-title"><h2>Math Tiltle here</h2> <span style={{ backgroundImage: `url(${numBack.src})` }} className='num-back'>20</span></div></AccordionTrigger>
                        <AccordionContent>
                            <div className="accordion-conttent-data">
                                <h4><i className="fa-regular fa-calendar-days"></i>Monday, 03 Jan 2024</h4>
                                <div className="options">
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>What is multiplication</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option active-option">
                                        <div className="bullet"></div>
                                        <h5>Addition of two numbers</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>Long division steps</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                        <AccordionContent>
                            <div className="accordion-conttent-data">
                                <h4><i className="fa-regular fa-calendar-days"></i>Monday, 03 Jan 2024</h4>
                                <div className="options">
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>What is multiplication</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option ">
                                        <div className="bullet"></div>
                                        <h5>Addition of two numbers</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>Long division steps</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                        <AccordionContent>
                            <div className="accordion-conttent-data">
                                <h4><i className="fa-regular fa-calendar-days"></i>Monday, 03 Jan 2024</h4>
                                <div className="options">
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>What is multiplication</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option ">
                                        <div className="bullet"></div>
                                        <h5>Addition of two numbers</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>Long division steps</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className='accordion-item'>
                        <AccordionTrigger><div className="accordion-title"><h2>Math Tiltle here</h2> <span style={{ backgroundImage: `url(${numBack.src})` }} className='num-back'>20</span></div></AccordionTrigger>
                        <AccordionContent>
                            <div className="accordion-conttent-data">
                                <h4><i className="fa-regular fa-calendar-days"></i>Monday, 03 Jan 2024</h4>
                                <div className="options">
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>What is multiplication</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option ">
                                        <div className="bullet"></div>
                                        <h5>Addition of two numbers</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>Long division steps</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                        <AccordionContent>
                            <div className="accordion-conttent-data">
                                <h4><i className="fa-regular fa-calendar-days"></i>Monday, 03 Jan 2024</h4>
                                <div className="options">
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>What is multiplication</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option ">
                                        <div className="bullet"></div>
                                        <h5>Addition of two numbers</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>Long division steps</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                        <AccordionContent>
                            <div className="accordion-conttent-data">
                                <h4><i className="fa-regular fa-calendar-days"></i>Monday, 03 Jan 2024</h4>
                                <div className="options">
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>What is multiplication</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option ">
                                        <div className="bullet"></div>
                                        <h5>Addition of two numbers</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>Long division steps</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className='accordion-item'>
                        <AccordionTrigger><div className="accordion-title"><h2>Math Tiltle here</h2> <span style={{ backgroundImage: `url(${numBack.src})` }} className='num-back'>20</span></div></AccordionTrigger>
                        <AccordionContent>
                            <div className="accordion-conttent-data">
                                <h4><i className="fa-regular fa-calendar-days"></i>Monday, 03 Jan 2024</h4>
                                <div className="options">
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>What is multiplication</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option ">
                                        <div className="bullet"></div>
                                        <h5>Addition of two numbers</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>Long division steps</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                        <AccordionContent>
                            <div className="accordion-conttent-data">
                                <h4><i className="fa-regular fa-calendar-days"></i>Monday, 03 Jan 2024</h4>
                                <div className="options">
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>What is multiplication</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option ">
                                        <div className="bullet"></div>
                                        <h5>Addition of two numbers</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>Long division steps</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                        <AccordionContent>
                            <div className="accordion-conttent-data">
                                <h4><i className="fa-regular fa-calendar-days"></i>Monday, 03 Jan 2024</h4>
                                <div className="options">
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>What is multiplication</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option ">
                                        <div className="bullet"></div>
                                        <h5>Addition of two numbers</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                    <div className="option">
                                        <div className="bullet"></div>
                                        <h5>Long division steps</h5>
                                        <i className="fa-solid fa-ellipsis"></i>
                                    </div>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}