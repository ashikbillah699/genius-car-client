import React, { useContext } from 'react';
import LoginImg from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const correntUser = {
                    email: user.email
                }
                console.log(correntUser)

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(correntUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('car-token', data.token)
                        navigate(from, { replace: true });
                    })

            })
            .catch(error => console.error(error))
    }
    return (
        <div className="hero w-full">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className="w-3/4" src={LoginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 px-12">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter your email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-orange-600 border-0" value="Login" />
                        </div>
                        <p className='text-center mt-5'>or sing in with</p>
                        <div className='flex justify-center gap-8 my-8'>
                            <FaFacebook className='text-sky-800'></FaFacebook > <FaLinkedin className='text-orange-600'></FaLinkedin> <FaGoogle className='text-sky-800'></FaGoogle>
                        </div>
                        <p className='text-center'>Have an account? <Link className=" text-orange-600" to='/signup'>Sign up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;