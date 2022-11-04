import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServicesCart = ({ service }) => {
    const { _id, img, title, price } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-6 pb-0">
            <figure><img className='rounded-lg' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl">{title}</h2>
                <div className='flex'>
                    <p className='font-semibold text-orange-600 tex-2xl'>Price : {price}</p>
                    <Link to={`/chackout/${_id}`}><FaArrowRight className='font-semibold text-orange-600 tex-2xl'></FaArrowRight></Link>
                </div>
            </div>
        </div >
    );
};

export default ServicesCart;