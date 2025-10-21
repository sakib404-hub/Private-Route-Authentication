import React from 'react';
import { NavLink } from 'react-router';

const Login = () => {
    return (
        <div className="card bg-base-100 mx-auto my-50 w-full max-w-md shadow-2xl py-10">
            <h1 className="text-5xl text-center font-bold">Please Login!</h1>
            <div className="card-body">
                <form>
                    <fieldset className="fieldset">
                        {/* Email Field  */}
                        <label className="label">
                            Email
                        </label>
                        <input
                            type="email"
                            className="input"
                            placeholder="Email"
                            name='email' />
                        {/* Password Field  */}
                        <label className="label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                </form>
                <p>
                    Don't Have an Account ? <NavLink to={'/register'} className='text-blue-500
                    hover:text-blue-800'>Register</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Login;