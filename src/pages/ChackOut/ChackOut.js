import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ChackOut = () => {
    const { title, price, _id } = useLoaderData()
    const { user } = useContext(AuthContext);

    const handlePlaceHolder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.first.value} ${form.last.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;
        const order = {
            service: _id,
            serviceName: title,
            price,
            customarName: name,
            phone,
            email,
            message
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('secces')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <form onSubmit={handlePlaceHolder}>
            <h2 className="text-5xl mt-8">{title}</h2>
            <h2 className="text-3xl mt-3 mb-4">Price : {price}</h2>
            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-5 '>
                <input name="first" type="text" placeholder="First name" className="input input-bordered " />
                <input name="last" type="text" placeholder="Last name" className="input input-bordered " />
                <input name="phone" type="number" placeholder="Your phone" className="input input-bordered " />
                <input name="email" type="email" placeholder="Your email" className="input input-bordered " defaultValue={user?.email} readOnly />
            </div>
            <textarea name="message" className="textarea textarea-bordered my-4 w-full" placeholder="your Message"></textarea>
            <Link><input className='btn mb-8' type="submit" value="submit " /></Link>
        </form>
    );
};

export default ChackOut;