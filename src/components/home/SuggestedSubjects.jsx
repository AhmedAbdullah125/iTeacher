import tringStar from '/public/tringStar.svg'
import sub from '/public/sub.png'
import view from '/public/view.svg'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link'

export default function SuggestedSubjects() {
    return (
        <div className="suggested-subjects">
            <div className="heading">
                <h2>Suggested Subjects</h2>
                <Link href={'#'}><Image src={view} className='view-img' alt='iTeacher'></Image> <span>View All</span></Link>
            </div>
            <div className="sug-subs-cont">
                <div className="sug">
                    <div className="details">
                        <div className="garde">
                            <span className='level'>First Level</span>
                            <span className='semester'>First Semester</span>
                        </div>
                        <h3>Subject Name</h3>
                        <p>fact that a reader will be distracted by the readable content of en looking at its content of en looking at its content of en looking at its .</p>
                        <button>Button name here...</button>
                    </div>
                    <div className="img-arrow">
                        <Image src={sub} alt='iTeacher' />
                        <Link href={'#'}> View Subject <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="sug">
                    <div className="details">
                        <div className="garde">
                            <span className='level'>First Level</span>
                            <span className='semester'>First Semester</span>
                        </div>
                        <h3>Subject Name</h3>
                        <p>fact that a reader will be distracted by the readable content of en looking at its content of en looking at its content of en looking at its .</p>
                        <button>Button name here...</button>
                    </div>
                    <div className="img-arrow">
                        <Image src={sub} alt='iTeacher' />
                        <Link href={'#'}> View Subject <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="sug">
                    <div className="details">
                        <div className="garde">
                            <span className='level'>First Level</span>
                            <span className='semester'>First Semester</span>
                        </div>
                        <h3>Subject Name</h3>
                        <p>fact that a reader will be distracted by the readable content of en looking at its content of en looking at its content of en looking at its .</p>
                        <button>Button name here...</button>
                    </div>
                    <div className="img-arrow">
                        <Image src={sub} alt='iTeacher' />
                        <Link href={'#'}> View Subject <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="sug">
                    <div className="details">
                        <div className="garde">
                            <span className='level'>First Level</span>
                            <span className='semester'>First Semester</span>
                        </div>
                        <h3>Subject Name</h3>
                        <p>fact that a reader will be distracted by the readable content of en looking at its content of en looking at its content of en looking at its .</p>
                        <button>Button name here...</button>
                    </div>
                    <div className="img-arrow">
                        <Image src={sub} alt='iTeacher' />
                        <Link href={'#'}> View Subject <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}