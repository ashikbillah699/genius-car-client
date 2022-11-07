import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, haldleDelet }) => {
    const { _id, serviceName, customarName, price, email, service } = order;
    const [orderService, setOrderService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data))
    }, [service])



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => haldleDelet(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                orderService.img &&
                                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
                            }
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">Price : ${price}</div>
                    </div>
                </div>
            </td>
            <td>
                {customarName}
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">{email}</button>
            </th>
        </tr>
    );
};

export default OrderRow;