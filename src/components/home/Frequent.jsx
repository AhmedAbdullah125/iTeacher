import Image from 'next/image';
import Link from 'next/link';
import cur from '/public/cur.svg'
import view from '/public/view.svg'
import sub1 from '/public/sub1.png'
import atom from '/public/atom.svg'
import abaj from '/public/abaj.svg'
import book from '/public/bookk.svg'
import sub2 from '/public/sub2.png'
import sub3 from '/public/sub3.png'
import React from 'react';

export default function Frequent() {
    return (
        <div className="freq">
            <Image src={cur} alt='iTeacher' className='cur-img' />
            <Image src={atom} alt='iTeacher' className='atom' />
            <Image src={abaj} alt='iTeacher' className='abaj' />
            <Image src={book} alt='iTeacher' className='book' />
            <div className="heading">
                <h3>The most frequently asked and searched subjects</h3>
                <Link href={'#'}><Image src={view} className='view-img' alt='iTeacher'></Image> <span>View All</span></Link>
            </div>
            <div className="freq-subs">
                <div className="sub">
                    <div className="img-cont">
                        <Image src={sub1} alt='iTeacher' />
                    </div>
                    <h2>Evaluate various</h2>
                    <h3>Evaluate various</h3>
                    <p>fact that a reader will be distracted by thecontent of en at its layout.</p>
                    <div className="grade">
                        <span className='level'>First Level</span>
                        <span className='semester'>First Semester</span>
                    </div>
                    <Link href={'#'} className='v-sub'>
                        View Subject
                        <div className="arr">
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </Link>
                    <span className='bg-card'></span>
                </div>
                <div className="sub">
                <div className="img-cont">
                        <Image src={sub2} alt='iTeacher' />
                    </div>
                    <h2>Evaluate various</h2>
                    <h3>Evaluate various</h3>
                    <p>fact that a reader will be distracted by thecontent of en at its layout.</p>
                    <div className="grade">
                        <span className='level'>First Level</span>
                        <span className='semester'>First Semester</span>
                    </div>
                    <Link href={'#'} className='v-sub'>
                        <span>View Subject</span>
                        <div className="arr">
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </Link>
                    <span className='bg-card'></span>
                </div>
                <div className="sub">
                <div className="img-cont">
                        <Image src={sub3} alt='iTeacher' />
                    </div>
                    <h2>Evaluate various</h2>
                    <h3>Evaluate various</h3>
                    <p>fact that a reader will be distracted by thecontent of en at its layout.</p>
                    <div className="grade">
                        <span className='level'>First Level</span>
                        <span className='semester'>First Semester</span>
                    </div>
                    <Link href={'#'} className='v-sub'>
                        <span>View Subject</span>
                        <div className="arr">
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </div>
                    </Link>
                    <span className='bg-card'></span>
                </div>
            </div>
        </div>
    );
}