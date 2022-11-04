import React, { useContext } from 'react';
import LoginImg from '../../assets/images/login/login.svg'
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
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
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-5xl font-bold">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn bg-orange-600 border-0" value="Sign UP" />
                        </div>
                        <p className='text-center mt-5'>or sing up with</p>
                        <div className='flex justify-center gap-8 my-8'>
                            <FaFacebook className='text-sky-800'></FaFacebook > <FaLinkedin className='text-orange-600'></FaLinkedin> <FaGoogle className='text-sky-800'></FaGoogle>
                        </div>
                        <p className='text-center'>Already have an account?<Link className=" text-orange-600" to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;