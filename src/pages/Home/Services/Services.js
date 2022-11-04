import React, { useEffect, useState } from 'react';
import ServicesCart from './ServicesCart';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mb-12'>
            <div className='text-center'>
                <p className='font-bold text-2xl leading-6 text-orange-400'>Services</p>
                <h1 className="text-5xl font-bold py-5">Our Service Area</h1>
                <p className="pb-5 text-slate-600 w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour,
                    or randomised words which don't look even slightly believable.  </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServicesCart key={service._id} service={service}></ServicesCart>)
                }
            </div>
        </div>
    );
};

export default Services;