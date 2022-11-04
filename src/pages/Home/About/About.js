import React from 'react';
import Person from '../../../assets/images/about_us/person.jpg'
import Parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-32">
            <div className="hero-content p-0 flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={Person} alt="" className=" rounded-lg shadow-2xl w-4/5 h-full" />
                    <img src={Parts} alt="" className=" rounded-lg border-8 border-white absolute top-1/2 right-5 w-3/5" />
                </div>
                <div className='w-1/2'>
                    <p className='font-bold text-2xl leading-6 text-orange-600'>About Us</p>
                    <h1 className="text-5xl font-bold py-5">We are qualified <br /> & of experience  <br /> in this field</h1>
                    <p className="py-5 text-slate-400 w-4/5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="pb-6 text-slate-400 w-4/5">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-orange-600 border-0">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;