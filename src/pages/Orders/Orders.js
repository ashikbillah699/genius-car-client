import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const { user } = useContext(AuthContext)
    const [orders, setOrders] = useState([])
    console.log(orders)

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const haldleDelet = id => {
        const proceed = window.confirm('are you sure')
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('seccess deleteed')
                        const remaining = orders.filter(odr => odr._id !== id)
                        setOrders(remaining)
                    }
                })
        }

    }
    return (

        <div>
            <h2>you have {orders.length} orders</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Delete</th>
                            <th>Your order</th>
                            <th>User Name</th>
                            <th>info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow key={order._id} order={order} haldleDelet={haldleDelet}></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;